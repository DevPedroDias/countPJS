class CountJs {
    constructor(element, time = 2000, domElement = 'span') {
        this.element = element; // initial element
        this.domElement = domElement; // element will be used to construct the count
        this.structuredObject = this.structureObj();
        this.time = time; // total time to render the count
       this.mountHTMLAnimation(); // start mount and count
    }
    structureObj = () => {
        let a_object = []
        this.element.forEach(collection => {
            let object = {}
            object.aElement =[]
            object.arrayCollection = collection;
            Array.from(collection).forEach(item => {
                object.classUsed = item.classList[0];
                object.parent = item.parentNode;
                object.originalDOM = item.parentNode.innerHTML;
                object.aElement.push(this.getSeparetedValue(item));
            });
            a_object.push(object);
        })
        return a_object;
    }

    /**
     * function called to split the number per symbols('.',',') used in Brazil numbers
     */

    getSeparetedValue = (item) => {
        var result = [];
        var separator;
        separator = item.innerHTML.split('.');
        separator.push(separator[separator.length - 1].split(',')[1])
        separator[separator.length - 2] = separator[separator.length - 2].split(',')[0]
        result = separator;
        return result;
    }

    /**
     * function called to get splited numbers and symbols and start to get together separated in elements, after that will start count
     */
    mountHTMLAnimation = () => {
        this.structuredObject.map(object=>{
            console.log(object);
        })







        // var total = 0, el = [];
        // for (let index = 0; index < this.elements.length; index++) {
        //     el[index] = document.createElement(this.domElement);

        //     for (let indexElements = 0; indexElements < this.elements[index].length; indexElements++) {
        //         var inner = document.createElement(this.domElement)

        //         inner.setAttribute('id', 'count_' + index + indexElements)
        //         inner.append(indexElements > 0 && indexElements < this.elements[index][indexElements].length - 1 ? '000' : '00');
        //         el[index].append(inner);
        //         var points = document.createElement(this.domElement);
        //         points.setAttribute('id', 'points_' + index + indexElements);
        //         if (indexElements != this.elements[index].length - 1) {
        //             points.append(indexElements == this.elements[index][indexElements].length - 2 ? ',' : '.');
        //             el[index].append(points);
        //         }
        //         total += parseInt(this.elements[index][indexElements]);
        //     }
        // }
        // this.init(el);
        // //here is de index variables based in element collection and elements array
        // var count = 0, index = 0, indexElements = this.elements[index].length - 1, upperElement;
        // // here count starts
        // var loop = setInterval(() => {
        //     if (parseInt(this.elements[index][indexElements]) > count) {
        //         count = count + 1;
        //         upperElement = document.querySelector('.count' + index)
        //         upperElement.querySelector('#count_' + index + indexElements).innerHTML = this.setZeros(index, indexElements, count) + count
        //     } else {
        //         indexElements--;
        //         count = 0;
        //         if (indexElements < 0) {
        //             index++;
        //             if (this.elements.length == index) {
        //                 clearInterval(loop);
        //                 return this.finalize();
        //             } else {
        //                 indexElements = this.elements[index].length - 1;
        //             }
        //         }
        //     }
        // }, (this.time / total));
    }
    /**
     * function called to set zeros when the count starts
     * @param index is the index based in element collection
     * @param indexElements is the index based in elements array 
     * @param count current count value
     */
    setZeros = (index, indexElements, count) => {
        var zeros = '';
        if (indexElements == 0 || (indexElements > 0 && indexElements < this.elements[index].length - 1)) {
            if (this.elements[index][indexElements].length == 3) {
                if (count.toString().length == 1) {
                    zeros = '00';
                } else if (count.toString().length == 2) {
                    zeros = '0';
                }
            }
        } else if (indexElements == this.elements[index].length - 1) {
            zeros = count.toString().length == 1 ? '0' : zeros;
        }
        return zeros;
    }
    /**
     * function called when the count is finished, here we get the original DOM and put in the top element.
     */
    finalize = () => {
        var dadElement = document.getElementsByClassName(this.classUsed + '0')[0].parentNode;
        dadElement.innerHTML = this.original.innerHTML;
    }
}