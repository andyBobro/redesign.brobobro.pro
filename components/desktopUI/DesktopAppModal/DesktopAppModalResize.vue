<template>
  <!-- 
    to refactore and customise code from https://github.com/justcaliturner/vue-resizer
  -->
  <div
    class="relative overflow-hidden"
    :style="{
      height: reHeight + 'px',
      width: reWidth + 'px',
    }"
  >
    <div class="w-full h-full">
      <slot />
    </div>
    <div
      class="absolute h-2 bottom-0 left-0 w-full cursor-row-resize z-1"
      @touchstart.passive="mobileResizeRow"
      @mousedown="resizeRow"
    />
    <div
      class="absolute w-2 top-0 right-0 h-full cursor-col-resize z-1"
      @touchstart.passive="mobileResizeCol"
      @mousedown="resizeCol"
    />
  </div>
</template>
<script>
export default {
  name: 'DesktopAppModalResize',
  props: {
    height: {
      type: Number,
      default: 400,
    },
    width: {
      type: Number,
      default: 400,
    },
  },
  data() {
    return {
      reWidth: this.width,
      reHeight: this.height,
      isDragging: false,
      canResize: true,
    };
  },
  methods: {

    mobileResizeRow(e) {
      document.body.style.overflow = "hidden";
      document.body.style.overscrollBehaviorY = "contain";
      e = e || window.event;
      e.stopPropagation();
      let oldPos = e.changedTouches[0].clientY;
      let oldHeight = this.reHeight;
      let newPos = 0;
      let newHeight = 0;
      const vue = this;
      this.isDragging = true;
      this.$emit("isDraggingRow", this.isDragging);
      document.ontouchmove = sliderDrag;
      document.ontouchend = cancelSliderDrag;
      function sliderDrag(e) {
        if (this.time && Date.now() - this.time < 40) return;
        this.time = Date.now();
        e = e || window.event;
        e.stopPropagation();
        newPos = e.changedTouches[0].clientY;
        const movingDistance = oldPos - newPos;
        newHeight = parseInt(oldHeight - movingDistance);
        if (newHeight <= 20) {
          vue.reHeight = 20;
        } else {
          vue.reHeight = newHeight;
        };
        vue.$emit("draggingRow", vue.reHeight);
      }
      function cancelSliderDrag() {
        vue.isDragging = false;
        vue.$emit("isDraggingRow", vue.isDragging);
        document.body.style.overflow = "";
        document.body.style.overscrollBehaviorY = "";
        document.ontouchmove = null;
        document.ontouchend = null;
      }
    },
    resizeRow(e) {
      e = e || window.event;
      e.preventDefault();
      e.stopPropagation();
      let oldPos = e.clientY;
      let oldHeight = this.reHeight;
      let newPos = 0;
      let newHeight = 0;
      const vue = this;
      this.isDragging = true;
      this.$emit("isDraggingRow", this.isDragging);
      document.onmousemove = sliderDrag;
      document.onmouseup = cancelSliderDrag;
      function sliderDrag(e) {
        if (this.time && Date.now() - this.time < 40) return;
        this.time = Date.now();
        e = e || window.event;
        e.preventDefault();
        e.stopPropagation();
        newPos = e.clientY;
        const movingDistance = oldPos - newPos;
        newHeight = parseInt(oldHeight - movingDistance);
        if (newHeight <= 20) {
          vue.reHeight = 20;
        } else {
          vue.reHeight = newHeight;
        };
        vue.$emit("draggingRow", vue.reHeight);
      }
      function cancelSliderDrag() {
        vue.isDragging = false;
        vue.$emit("isDraggingRow", vue.isDragging);
        document.onmouseup = null;
        document.onmousemove = null;
      }
    },
    mobileResizeCol(e) {
      e = e || window.event;
      e.stopPropagation();
      let oldPos = e.changedTouches[0].clientX;
      let oldWidth = this.reWidth;
      let newPos = 0;
      let newWidth = 0;
      const vue = this;
      this.isDragging = true;
      this.$emit("isDraggingCol", this.isDragging);
      document.ontouchmove = sliderDrag;
      document.ontouchend = cancelSliderDrag;
      function sliderDrag(e) {
        if (this.time && Date.now() - this.time < 40) return;
        this.time = Date.now();
        e = e || window.event;
        e.stopPropagation();
        newPos = e.changedTouches[0].clientX;
        const movingDistance = oldPos - newPos;
        newWidth = parseInt(oldWidth - movingDistance);
        if (newWidth <= 20) {
          vue.reWidth = 20;
        } else {
          vue.reWidth = newWidth;
        };
        vue.$emit("draggingCol", vue.reWidth);
      }
      function cancelSliderDrag() {
        vue.isDragging = false;
        vue.$emit("isDraggingCol", vue.isDragging);
        document.ontouchmove = null;
        document.ontouchend = null;
      }
    },
    resizeCol(e) {
      e = e || window.event;
      e.preventDefault();
      e.stopPropagation();
      let oldPos = e.clientX;
      let oldWidth = this.reWidth;
      let newPos = 0;
      let newWidth = 0;
      const vue = this;
      this.isDragging = true;
      this.$emit("isDraggingCol", this.isDragging);
      document.onmousemove = sliderDrag;
      document.onmouseup = cancelSliderDrag;
      function sliderDrag(e) {
        if (this.time && Date.now() - this.time < 40) return;
        this.time = Date.now();
        e = e || window.event;
        e.preventDefault();
        e.stopPropagation();
        newPos = e.clientX;
        const movingDistance = oldPos - newPos;
        newWidth = parseInt(oldWidth - movingDistance);
        if (newWidth <= 20) {
          vue.reWidth = 20;
        } else {
          vue.reWidth = newWidth;
        };
        vue.$emit("draggingCol", vue.reWidth);
      }
      function cancelSliderDrag() {
        vue.isDragging = false;
        vue.$emit("isDraggingCol", vue.isDragging);
        document.onmouseup = null;
        document.onmousemove = null;
      }
    },
  },
};
</script>
