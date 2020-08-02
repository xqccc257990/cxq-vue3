export default {
  state: {
    ruleForm: {}, //
  },
  getters: {},
  mutations: {
    setruleForm(state, form) {
      let key = Object.keys(form)[0];
      let values = Object.values(form)[0];
      state.ruleForm[key] = values;
      state.ruleForm = Object.assign({}, state.ruleForm);
      console.log("setruleForm 总，目前", state.ruleForm, form);
    },
  },
  actions: {},
};
