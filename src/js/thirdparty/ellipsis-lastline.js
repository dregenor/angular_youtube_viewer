(function(w, d) {
    'use strict';
    var i,
        support = d.createElement('div'),
        supportLineClamp = support.style.WebkitLineClamp === ''
    /*,
     supportBoxSizing = support.style.boxSizing === '' || support.style.MozBoxSizing === '' || support.style.WebkitBoxSizing === ''
     */;

    // cleanup
    support = void 0;

    var allTextNodes = function allTextNodes(el, nodes) {
        var i,
            style;

        if(el.childNodes) {
            for(i = 0; i < el.childNodes.length; i++) {
                if(el.childNodes[i].nodeType === Node.ELEMENT_NODE) {
                    style = w.getComputedStyle ? w.getComputedStyle(el.childNodes[i]) : el.currentStyle;
                } else {
                    style = false;
                }

                // we ignore elements that are not spoken
                if(! (style.speak && style.speak === 'none')) {
                    allTextNodes(el.childNodes[i], nodes);
                }
            }
        }
        // we are not interested of white space text nodes, so we ignore those
        if(el.nodeType === Node.TEXT_NODE && /\S/.test(el.nodeValue)) {
            nodes.push(el);
        }
    };

    var getRectHeight = function getRectHeight(el) {
        var rect;

        if(el.getBoundingClientRect) {
            rect = el.getBoundingClientRect();

            if(!rect.height) {
                return rect.bottom - rect.top;
            } else {
                return rect.height;
            }
        }

        return 0;
    }

    function applyEllipsis(el) {
        var i,
            j,
            nodes = [],
            lastChar,
            lastNode,
            range,
            style,
            lineHeight,
            lines = 0,
            linesToRemove,
            innerHeight,
            paddingTop,
            paddingBottom,
            textLines;

        style = w.getComputedStyle ? w.getComputedStyle(el) : el.currentStyle;

        // wow, native feature, how complete
        if(w.opera) {
            el.style.textOverflow = '-o-ellipsis-lastline';
            return;
        }

        lineHeight = parseFloat(style.lineHeight);

        /*if(supportBoxSizing && (style.boxSizing === 'border-box' || style.MozBoxSizing === 'border-box' || style.WebkitBoxSizing === 'border-box')) {
         paddingTop = 0;
         paddingBottom = 0;
         } else {*/
        paddingTop = parseFloat(style.paddingTop);
        paddingBottom = parseFloat(style.paddingBottom);
        //}
        innerHeight = getRectHeight(el) - paddingTop - paddingBottom;

        if(innerHeight > 0) {
            // use floor to only get the fully visible lines
            lines = Math.floor(innerHeight / lineHeight);
        }

        if(lines > 1) {
            // get all the text nodes
            allTextNodes(el, nodes);

            // see if we got any
            if(nodes.length) {
                // cache the last one
                lastNode = nodes[nodes.length - 1];
                // create a full range so we can see if we have anything to do
                range = d.createRange();
                range.setStart(nodes[0], 0);
                range.setEnd(lastNode, lastNode.length);
                // use ceil to account for inline rect being slightly smaller
                textLines = Math.ceil(getRectHeight(range) / lineHeight);

                linesToRemove = textLines - lines;

                // see if we have anything to do
                if(linesToRemove > 0) {
                    // see if we support WebKit's line-clamp
                    if(supportLineClamp) {
                        var elClampBox = d.createElement('span');
                        // set the necessary CSS
                        elClampBox.style.display = '-webkit-box';
                        elClampBox.style.WebkitLineClamp = lines;
                        elClampBox.style.WebkitBoxOrient = 'vertical';
                        // next line is drawn unless this is set
                        elClampBox.style.overflow = 'hidden';
                        // move original content here
                        elClampBox.appendChild(range.extractContents());
                        // cleanup
                        range.detach();
                        // move new element inside the original parent
                        el.appendChild(elClampBox);

                        return;
                    }
                    // we hide also the last line that would otherwise be visible
                    linesToRemove++;

                    if(nodes.length > 1) {
                        // find the node in which the line break will happen
                        for(i = 0; i < nodes.length - 1; i++) {
                            range.setStart(nodes[i], nodes[i].length - 1);

                            textLines = Math.ceil(getRectHeight(range) / lineHeight);

                            if(textLines <= linesToRemove) {
                                break;
                            }
                        }
                    } else {
                        i = 0;
                    }

                    for(j = 0; j < nodes[i].length - 1; j++) {
                        // ignore white space
                        if(/\S/.test(nodes[i].nodeValue.slice(j++, j--))) {
                            range.setStart(nodes[i], j);

                            textLines = Math.ceil(getRectHeight(range) / lineHeight);

                            if(textLines === linesToRemove) {
                                break;
                            }
                        }
                    }

                    if(j > 0) {
                        lastChar = nodes[i].nodeValue.charCodeAt(j - 1);
                    } else if(i > 0) {
                        lastChar = nodes[i - 1].nodeValue.charCodeAt(nodes[i - 1].length - 1);
                    }

                    // Presto bug
                    if(w.opera && lastChar !== 32) {
                        if(j > 0) {
                            range.setStart(nodes[i], --j);
                        } else if(i > 0) {
                            j = nodes[--i].length;
                            range.setStart(nodes[i], --j)
                        }
                    }

                    // a trick to get full available width on last visible line
                    el.style.textAlign = 'justify';

                    var rect = range.getClientRects(),
                        r = 1;

                    while(r < rect.length && rect[r].top === rect[0].top) {
                        r++;
                    }

                    el.style.textAlign = '';


                    var elEllipsis = d.createElement('span');

                    elEllipsis.style.width = (rect[--r].right - rect[0].left) + 'px';

                    // screen readers, ignore plz
                    elEllipsis.style.speak = 'none';
                    elEllipsis.setAttribute('role', 'presentation');
                    elEllipsis.tabIndex = -1;

                    //elEllipsis.setAttribute('data-ellipsis', range.toString());
                    elEllipsis.setAttribute('data-ellipsis', '');
                    elEllipsis.appendChild(range.cloneContents());

                    elEllipsis.style.marginTop = (lines - 1) * lineHeight + 'px';

                    el.insertBefore(elEllipsis, el.firstChild);

                    if(lastChar !== 32) {
                        var elHyphen = d.createElement('span');

                        elHyphen.setAttribute('data-hyphen', '');

                        el.appendChild(elHyphen);
                    }

                    var elOverflow = d.createElement('span');

                    elOverflow.setAttribute('data-overflow', '');

                    elOverflow.appendChild(range.extractContents());

                    range.detach();

                    el.appendChild(elOverflow);

                } else {
                    // cleanup
                    range.detach();
                }

            }
        } else {
            el.style.textOverflow = 'ellipsis';
            el.style.whiteSpace = 'nowrap';
        }
    }

    w.applyEllipsis = applyEllipsis;

})(window, document);