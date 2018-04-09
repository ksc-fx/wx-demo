Component({
    properties: {
        dir: {
            type: String,
            value: 'column' // row row-reverse column column-reverse
        },
        justify: {
            type: String,
            value: 'center' // flex-start center flex-end space-between space-around
        },
        align: {
            type: String,
            value: 'center' // flex-start center flex-end baseline stretch
        }
    }
});
