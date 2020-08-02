<template>
  <div>
    <div>
      <!-- <zz--upload-picture-card :item="item"
                              :type="type"
                              :uploads="uploads">
      </zz--upload-picture-card> -->
      <!-- <zz--upload-avatar :item="item"
                        :type="type"
                        :uploads="uploads">
      </zz--upload-avatar> -->
      <zz--upload-base :item="item"
                       :type="type"
                       :uploads="uploads">
      </zz--upload-base>
    </div>
  </div>
</template>


<script>
// import ZzUploadPictureCard from "../../../base_modules/components/upload/zz-upload-picture-card";
import ZzUploadBase from "../../../base_modules/components/upload/zz-upload-base";
// import ZzUploadAvatar from "../../../base_modules/components/upload/zz-upload-avatar";
//

export default {
  // components: { ZzUploadAvatar, ZzUploadPictureCard ,ZzUploadPictureCard},
  components: { ZzUploadBase },
  data() {
    return {
      uploads: {
        action: "https://jsonplaceholder.typicode.com/posts/",
        listType: "picture-card",
        tipText: "只能上传jpg/png文件，且不超过500kb"
      },

      item: {
        uploadType: "1",
        list: [
          {
            name: "food.jpeg",
            disabled: "true",
            url:
              "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
          },
          {
            disabled: "true",
            name: "food2.jpeg",
            url:
              "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
          }
        ]
      },

      type: ""
    };
  }
};
</script>

<style>
</style>