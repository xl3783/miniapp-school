var e = require("../../utils/util");

Component({
    properties: {
        isGrid: {
            type: Number,
            value: 1
        },
        navList: {
            type: Array,
            value: []
        },
        wxIdForSystem: {
            type: String,
            value: "123445"
        }
    },
    data: {},
    methods: {
        jump: function(t) {
            (0, e.jumpToDetail)(t);
        }
    }
});