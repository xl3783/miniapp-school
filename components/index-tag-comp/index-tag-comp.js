Component({
  properties: {
    fontSize: {
      type: Number,
      value: 28
    },
    tagSize: {
      type: Number,
      value: 26
    },
    tagList: {
      type: Array,
      value: ["tag1", "tag2"]
    },
    introList: {
      type: Object,
      value: {
        key1: "value1",
        key2: "value2"
      }
    },
    flexStyle: {
      type: Number,
      value: 1
    },
    globalColor: {
      type: String,
      value: "#1487FF"
    }
  },
  data: {},
  methods: {}
});