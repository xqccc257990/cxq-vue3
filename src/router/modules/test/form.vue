<template>
  <div>
    <div>
      <zz-form :formItems="formdatas"
               :rules="rules"
               :forms="forms"
               @submitForm="submit">

        <!-- <template v-slot:slotName>
          <div>
            <div style="color:red">ccč333w s333ccč333333</div>

          </div>
        </template> -->
      </zz-form>
    </div>
  </div>
</template>

<script>
import { validatepassWord } from "../../../base_modules/utils/validatefun";
import { mapState } from "vuex";
var validatePass = validatepassWord;

export default {
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    var checkAge = (rule, value, callback) => {
      console.log("checkAge!!", this.z, this.ruleForm, value);

      if (!value) {
        return callback(new Error("年龄不能为22空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      forms: { inline: "true", submitTest: "提交2" },

      formdatas: [
        {
          formType: "input",
          inputType: "base",
          // placeholder: "cxq",
          // placeholder: "",
          label: "名",
          width: "200px",
          maxlength: "10",
          key: "xm",

          disabled: ""
        },
        {
          formType: "input",
          inputType: "base",
          // placeholder: "cxq",
          // placeholder: "",
          label: "密码",
          maxlength: "10",
          key: "pass",
          disabled: ""
        },
        {
          formType: "input",
          inputType: "password",
          label: "2密码",

          maxlength: "10",
          key: "checkPass",
          disabled: ""
        },

        {
          formType: "slot",
          obj: {
            slotName: "slotName"
          }
        },
        {
          formType: "select",
          selectType: "select-filterable",
          label: "权限",
          key: "sysqxkey",
          // disabled: ,
          // placeholder: "3",
          // ？

          opt: {
            // isLoading: true,
            multiple: true,
            list: [
              {
                value: "v1",
                label: "1部门a"
              },
              {
                value: "v2",
                label: "11部门b"
              },
              {
                value: "v3",
                label: "部门c"
              }
            ]
          }
        }
      ],

      rules: {
        pass: [
          { validator: validatePass, trigger: "blur" },
          { required: true, message: "请选择mmm", trigger: "change" }
        ],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
        sysqxkey: [
          { required: true, message: "请选择bumen", trigger: "change" }
        ],
        xm: [{ required: true, message: "请选择xm", trigger: "change" }]
      }
    };
  },
  computed: {
    ...mapState({
      ruleForm(state) {
        return state.temdata.ruleForm;
      }
    })
  },

  watch: {},
  methods: {
    submit(form) {
      console.log("submit-----", form);
    }
  }
};
</script>
<style>
</style>