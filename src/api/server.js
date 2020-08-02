/**
 *
 *   系统配置接口
 *
 */
import { requestData } from '@/api';

// 按钮权限
export const btnAuthority = params => {
  /**
   *   params: {
   *      menuId: 菜单Id（
   *                 监测因子管理---11422
   *                 设备类型库管理---11022
   *   }
   */
  const opt = { url: '/bfs/bfs/button/list', type: 'post', params: params };
  return requestData(opt);
};

/* ----------------监测因子管理-------------------*/
export const monitorManagementServer = {
  // 查询
  monitorSearch: params => {
    /**
     *   params: {
     *      pollute: 因子名称
     *      systemType: 系统类型
     *   }
     */
    const opt = {
      // url: '/gems/mcs/standpollute/list',
      url: '/gems/pollute/info/list',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 添加
  monitorAdd: params => {
    /**
     *   params: {
     *      polluteName: 因子名称
     *      polluteCode: 因子编码
     *      pollconCunit: 精度
     *      symBols: 化学符号
     *      polluteAlias: 别名
     *      numPreciSion: 精度
     *      orderNum: 排序权值
     *      codeClass: 类别编码
     *      isAudit: 是否审核
     *   }
     */
    const opt = {
      // url: '/gems/mcs/standpollute/add',
      url: '/gems/pollute/info/add',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 修改
  monitorUpdate: params => {
    /**
     *   params: {
     *      polluteName: 因子名称
     *      polluteCode: 因子编码
     *      pollconCunit: 精度
     *      symBols: 化学符号
     *      polluteAlias: 别名
     *      numPreciSion: 精度
     *      orderNum: 排序权重
     *      isAudit: 是否审核
     *   }
     */
    const opt = {
      // url: '/gems/mcs/standpollute/update',
      url: '/gems/pollute/info/update',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 因子类别字典
  factorTypeDictionary: params => {
    /**
     *   params: {
     *      categoryclass: CODECLASS
     *      type:
     *   }
     */
    const opt = {
      url: '/bfs/dictionary/info/tree',
      type: 'post',
      params: params
    };
    return requestData(opt);
  }
};

/* ----------------设备类型库管理-------------------*/
export const typeManagementServer = {
  // 查询（不包含监测因子列表）
  equipLibSearch: params => {
    /**
     *   params: {
     *      equipName: 设备类型名称
     *      systemType: 系统类型
     *   }
     */
    const opt = {
      // url: '/gems/mcs/equiplib/list',
      url: '/gems/equipment/model/list',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 删除
  equipLibDelete: params => {
    /**
     *   params: {
     *      eid: 设备类型id
     *   }
     */
    const opt = {
      // url: '/gems/mcs/equiplib/deletekey',
      url: '/gems/equipment/model/delete',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 批量删除
  equipLibDeletes: params => {
    /**
     *   params: {
     *      eids: 设备类型id数组(','连接)
     *   }
     */
    const opt = {
      // url: '/gems/mcs/equiplib/delete',
      url: '/gems/equipment/model/delete',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 添加
  equipLibAdd: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = {
      // url: '/gems/mcs/equiplib/insert',
      url: '/gems/equipment/model/add',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 修改
  equipLibModify: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = {
      // url: '/gems/mcs/equiplib/update',
      url: '/gems/equipment/model/update',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 根据id查询（包含监测因子列表）
  monitorRef: params => {
    /**
     *   params: {
     *      eid: 设备类型id
     *   }
     */
    const opt = {
      // url: '/gems/mcs/equiplib/listeid',
      url: '/gems/equipment/info/get',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 设备型号字典
  equipTypeDictionary: () => {
    const opt = {
      // url: '/gems/mcs/equiptype/combolist',
      url: '/gems/equipment/model/dropdown',
      type: 'post',
      params: ''
    };
    return requestData(opt);
  },

  // 设备类型字典
  equipModelDictionary: params => {
    /**
     *   params: {
     *      systemType: 系统类型
     *      categoryclass: equipModel
     *   }
     */
    const opt = {
      url: '/bfs/dictionary/info/list',
      // url: '/bfs/dictionary/info/tree',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 验证设备类型名
  equipLibValid: params => {
    /**
     *   params: {
     *      equipName: 设备类型名
     *   }
     */
    const opt = {
      url: '/gems/mcs/equiplib/valid',
      type: 'post',
      params: params
    };
    return requestData(opt);
  }
};

/* ----------------设备分组管理-------------------*/
export const groupManagementServer = {
  // 查询
  equipGroupSearch: params => {
    /**
     *   params: {
     *      categoryName: 设备类型名称
     *   }
     */
    const opt = {
      // url: '/gems/mcs/equiplibgroup/list',
      url: '/gems/equipment/group/list',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 删除
  equipGroupDelete: params => {
    /**
     *   params: {
     *      generalCode: 设备分组id
     *   }
     */
    const opt = {
      // url: '/gems/mcs/equiplibgroup/deletekey',
      url: '/gems/equipment/group/delete',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 批量删除
  equipGroupDeletes: params => {
    /**
     *   params: {
     *      generalCodes: 设备分组id数组(','连接)
     *   }
     */
    const opt = {
      // url: '/gems/mcs/equiplibgroup/delete',
      url: '/gems/equipment/group/delete',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 添加
  equipGroupAdd: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = {
      // url: '/gems/mcs/equiplibgroup/insert',
      url: '/gems/equipment/group/add',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 修改
  equipGroupModify: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = {
      // url: '/gems/mcs/equiplibgroup/update',
      url: '/gems/equipment/group/update',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 根据分组编码查询（包含设备列表）
  equipLibRef: params => {
    /**
     *   params: {
     *      generalCode: 设备分组编码
     *   }
     */
    const opt = {
      // url: '/gems/mcs/equiplibgroup/listeid',
      url: '/gems/equipment/group/get',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 验证设备分组名称
  equipGroupValid: params => {
    /**
     *   params: {
     *      categoryName: 设备分组名称
     *   }
     */
    const opt = {
      url: '/gems/mcs/equiplibgroup/valid',
      type: 'post',
      params: params
    };
    return requestData(opt);
  }
};

/* ----------------部门信息维护-------------------*/
export const departmentInformation = {
  // 查询
  deptInfoSearch: params => {
    /**
     *   params: {
     *      searchDeptName: 部门名称
     *   }
     */
    const opt = { url: '/bfs/bfs/dept/list', type: 'post', params: params };
    return requestData(opt);
  },

  // 删除
  deptInfoDelete: params => {
    /**
     *   params: {
     *      deptIds: 部门id或id数组（','连接）
     *   }
     */
    const opt = { url: '/bfs/bfs/dept/drop', type: 'post', params: params };
    return requestData(opt);
  },

  // 添加部门
  deptInfoAdd: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = { url: '/bfs/bfs/dept/add', type: 'post', params: params };
    return requestData(opt);
  },

  // 修改部门
  deptInfoModify: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = { url: '/bfs/bfs/dept/edit', type: 'post', params: params };
    return requestData(opt);
  },

  // 部门字典
  deptDictionary: () => {
    const opt = { url: '/bfs/bfs/dept/combobox', type: 'post', params: '' };
    return requestData(opt);
  },

  // 部门负责人下拉
  deptLeaderList: params => {
    /**
     *   params: {
     *      ustatus: 1
     *      deptid: 部门id
     *      pdeptId: 上级部门id
     *   }
     */
    const opt = {
      url: '/bfs/bfs/user/comboboxlist',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 验证部门名称
  deptNameValid: params => {
    /**
     *   params: {
     *      deptId: 部门Id
     *      deptName: 部门名称
     *   }
     */
    const opt = { url: '/bfs/bfs/dept/valid', type: 'post', params: params };
    return requestData(opt);
  }
};

/* ----------------角色管理-------------------*/
export const roleManagementServer = {
  // 查询
  roleSearch: params => {
    /**
     *   params: {
     *      searchRoleName: 角色名称
     *      page: 当前页码
     *      rows: 单页记录数
     *   }
     */
    const opt = { url: '/bfs/bfs/role/list', type: 'post', params: params };
    return requestData(opt);
  },

  // 删除
  roleDelete: params => {
    /**
     *   params: {
     *      roleIds: 角色id或id数组（','连接）
     *   }
     */
    const opt = { url: '/bfs/bfs/role/drop', type: 'post', params: params };
    return requestData(opt);
  },

  // 添加
  roleAdd: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = { url: '/bfs/bfs/role/add', type: 'post', params: params };
    return requestData(opt);
  },
  // 修改
  roleModify: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = { url: '/bfs/bfs/role/edit', type: 'post', params: params };
    return requestData(opt);
  },

  // 角色操作按钮权限
  roleButtonAuthority: () => {
    const opt = {
      url: '/bfs/bfs/configuration/rolebuttonlist',
      type: 'post',
      params: ''
    };
    return requestData(opt);
  },

  // 分配用户查询
  deptUserSearch: params => {
    /**
     *   params: {
     *      roleId: 角色Id
     *   }
     */
    const opt = {
      url: '/bfs/bfs/dept/deptuser/treelist',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 分配用户添加
  deptUserAdd: params => {
    /**
     *   params: {
     *      ids: 树节点id(多个节点用多个ids)
     *      roleId: 角色id
     *   }
     */
    const opt = {
      url: '/bfs/bfs/dept/deptuser/add',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 角色菜单查询
  roleMenuSearch: params => {
    /**
     *   params: {
     *      roleId: 角色Id
     *      systemType: 系统类型
     *   }
     */
    const opt = {
      url: '/bfs/bfs/menu/listByRole',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 角色菜单添加
  roleMenuAdd: params => {
    /**
     *   params: {
     *      roleId: 角色id
     *      menuJson: 菜单节点json数据（格式：[{"menuId":"id","buttonList":[]},...]）
     *   }
     */
    const opt = {
      url: '/bfs/bfs/menu/rolemenu/add',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 角色站点权限查询
  rolePointAuthoritySearch: params => {
    /**
     *   params: {
     *      roleId: 角色Id
     *       systemCode: 系统编码
     *      regionCode: 区域编码
     *      pointName: 站点名称
     *      type:
     *   }
     */
    const opt = {
      url: '/gems/mcs/point/role/list',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 角色系统类型字典
  roleSysTypeDictionary: params => {
    /**
     *   params: {
     *      roleId: 角色Id
     *      categoryclass: systemType
     *      type:
     *   }
     */
    const opt = {
      url: '/gems/mcs/point/role/categorylist',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 角色区域字典
  roleAreaDictionary: params => {
    /**
     *   params: {
     *      roleId: 角色Id
     *      type:
     *   }
     */
    const opt = {
      url: '/gems/mcs/point/role/listarea',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 角色站点权限添加
  rolePointAuthorityAdd: params => {
    /**
     *   params: {
     *      pointIds: 测点Id
     *      roleId: 角色id
     *      type:
     *   }
     */
    const opt = {
      url: '/gems/mcs/point/role/add',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 验证角色名称
  roleValid: params => {
    /**
     *   params: {
     *      roleId: 角色Id
     *      roleName: 角色名称
     *   }
     */
    const opt = { url: '/bfs/bfs/role/valid', type: 'post', params: params };
    return requestData(opt);
  }
};

/* ----------------用户管理-------------------*/
export const userManagementServer = {
  // 查询
  userSearch: params => {
    /**
     *   params: {
     *      searchUserName: 用户名称
     *      deptId: 部门id
     *      page: 1
     *      rows: 20
     *   }
     */
    const opt = { url: '/bfs/bfs/user/list', type: 'post', params: params };
    return requestData(opt);
  },

  // 删除
  userDelete: params => {
    /**
     *   params: {
     *      userIds: 用户id或id数组（','连接）
     *   }
     */
    const opt = { url: '/bfs/bfs/user/drop', type: 'post', params: params };
    return requestData(opt);
  },

  // 添加
  userAdd: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = { url: '/bfs/bfs/user/add', type: 'post', params: params };
    return requestData(opt);
  },

  // 修改
  userModify: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = { url: '/bfs/bfs/user/edit', type: 'post', params: params };
    return requestData(opt);
  },

  // 角色选择
  chooseRole: () => {
    const opt = { url: '/bfs/bfs/role/combobox', type: 'post', params: '' };
    return requestData(opt);
  },

  // 用户操作按钮权限
  userButtonAuthority: () => {
    const opt = {
      url: '/bfs/bfs/configuration/userbuttonlist',
      type: 'post',
      params: ''
    };
    return requestData(opt);
  },

  // 用户站点权限查询
  userPointAuthoritySearch: params => {
    /**
     *   params: {
     *      userId: 用户Id
     *      systemCode: 系统编码
     *      regionCode: 区域编码
     *      pointName: 站点名称
     *      type:
     *   }
     */
    const opt = {
      url: '/gems/mcs/point/user/list',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 用户系统类型字典
  userSysTypeDictionary: params => {
    /**
     *   params: {
     *      userId: 用户Id
     *      categoryclass: systemType
     *      type:
     *   }
     */
    const opt = {
      url: '/gems/mcs/point/user/categorylist',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 用户区域字典
  userAreaDictionary: params => {
    /**
     *   params: {
     *      userId: 用户Id
     *      type:
     *   }
     */
    const opt = {
      url: '/gems/mcs/point/user/listarea',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 用户站点权限添加
  userPointAuthorityAdd: params => {
    /**
     *   params: {
     *      pointIds: 测点Id
     *      userId: 用户id
     *      type:
     *   }
     */
    const opt = {
      url: '/gems/mcs/point/user/add',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 验证用户名称
  userValid: params => {
    /**
     *   params: {
     *      userid:  用户id
     *     loginname: 登录名
     *   }
     */
    const opt = { url: '/bfs/bfs/user/valid', type: 'post', params: params };
    return requestData(opt);
  },

  // 重置用户密码
  initPsw: params => {
    /**
     *   params: {
     *     loginname: 登录名
     *   }
     */
    const opt = {
      url: '/bfs/bfs/user/init/password',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 获取公钥信息
  startPwd: () => {
    const opt = {
      url: '/bfs/bfs/user/startpwd',
      type: 'post',
      params: ''
    };
    return requestData(opt);
  }
};

/* ----------------区域配置-------------------*/
export const regionConfigureServer = {
  // 查询
  areaSearch: params => {
    /**
     *   params: {
     *      regionName: 区域名
     *      regionCode: 区域代码
     *   }
     */
    const opt = {
      url: '/gems/mcs/areacode/list',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 删除
  areaDelete: params => {
    /**
     *   params: {
     *      regionCodes: 区域代码或区域代码数组（','连接）
     *   }
     */
    const opt = {
      url: '/gems/mcs/areacode/delete',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 添加
  areaAdd: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = {
      url: '/gems/mcs/areacode/save',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 修改
  areaModify: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = {
      url: '/gems/mcs/areacode/update',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 区域等级字典
  areaLevelDictionary: params => {
    /**
     *   params: {
     *      categoryclass: areaLevel
     *      type: 1
     *   }
     */
    const opt = {
      url: '/bfs/bfs/configuration/categorylist',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 区域信息字典
  areaDictionary: params => {
    /**
     *   params: {
     *      regionCode: 区域代码
     *      level:
     *   }
     */
    const opt = {
      url: '/gems/mcs/areacode/queryareainfor',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 验证区域名
  areaValid: params => {
    /**
     *   params: {
     *      regionName: 区域名
     *      regionCode: 区域代码
     *      oldregionName: 修改前的区域名
     *      oldregionCode: 修改前的区域代码
     *   }
     */
    const opt = {
      url: '/gems/mcs/areacode/valid',
      type: 'post',
      params: params
    };
    return requestData(opt);
  }
};

/* ----------------系统日志-------------------*/
export const systemLogServer = {
  // 查询
  syslogSearch: params => {
    /**
     *   params: {
     *      logTime: 开始时间
     *      endTime: 结束时间
     *      logContent: 日志内容
     *      logType: 日志类型
     *      page: 当前页码
     *      rows: 单页记录数
     *   }
     */
    const opt = {
      url: '/bfs/bfs/configuration/systemlog',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 日志类型字典
  logTypeDictionary: params => {
    /**
     *   params: {
     *      categoryclass: logType
     *      type: 0
     *   }
     */
    const opt = {
      url: '/bfs/bfs/configuration/categorylist',
      type: 'post',
      params: params
    };
    return requestData(opt);
  }
};

/* ----------------因子转换配置-------------------*/
export const factorConfigureServer = {
  // 查询
  factorConvertSearch: params => {
    /**
     *   params: {
     *      polluteName: 因子名称
     *      systemType: 系统类型
     *   }
     */
    const opt = {
      // url: '/gems/mcs/polltrans/list',
      url: '/gems/pollute/trans/list',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 删除
  factorConvertDelete: params => {
    /**
     *   params: {
     *      polluteCode: 因子目前编码
     *      systemType: 系统类型
     *   }
     */
    const opt = {
      // url: '/gems/mcs/polltrans/delete',
      url: '/gems/pollute/trans/delete',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 添加
  factorConvertAdd: params => {
    /**
     *   params: {
     *      paramid: 因子原来编码
     *      polluteCode: 因子目前编码
     *      systype: 系统来源类型编码
     *      systemType: 系统类型
     *   }
     */
    const opt = {
      // url: '/gems/mcs/polltrans/insert',
      url: '/gems/pollute/trans/add',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 修改
  factorConvertModify: params => {
    /**
     *   params: {
     *      paramid: 因子原来编码
     *      polluteCode: 因子目前编码
     *      systype: 系统来源类型编码
     *      systemType: 系统类型
     *   }
     */
    const opt = {
      // url: '/gems/mcs/polltrans/update',
      url: '/gems/pollute/trans/update',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 因子字典
  factorDictionary: params => {
    /**
     *   params: {
     *      systemType: 系统类型
     *   }
     */
    const opt = {
      url: '/gems/pollute/info/list',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 系统来源字典
  syssourceDictionary: params => {
    /**
     *   params: {
     *      categoryclass: systemSource
     *      type: 1
     *   }
     */
    const opt = {
      url: '/bfs/dictionary/info/tree',
      type: 'post',
      params: params
    };
    return requestData(opt);
  }
};

/* ----------------流域管理-------------------*/
export const watershedManagementServer = {
  // 查询
  waterSearch: params => {
    /**
     *   params: {
     *      wsystemWaterName: 流域名称
     *   }
     */
    const opt = { url: '/gems/mcs/water/list', type: 'post', params: params };
    return requestData(opt);
  },

  // 删除
  waterDelete: params => {
    /**
     *   params: {
     *      codeWsystemWaters:: 流域代码或区域代码数组（','连接）
     *   }
     */
    const opt = { url: '/gems/mcs/water/delete', type: 'post', params: params };
    return requestData(opt);
  },

  // 新增
  waterAdd: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = { url: '/gems/mcs/water/insert', type: 'post', params: params };
    return requestData(opt);
  },

  // 修改
  waterModify: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = { url: '/gems/mcs/water/update', type: 'post', params: params };
    return requestData(opt);
  },

  // 验证流域名称
  waterValid: params => {
    /**
     *   params: {
     *      codeWsystemWater: 流域代码
     *      wsystemWaterName: 流域名称
     *   }
     */
    const opt = { url: '/gems/mcs/water/valid', type: 'post', params: params };
    return requestData(opt);
  }
};

/* ----------------河流配置-------------------*/
export const riversConfigureServer = {
  // 查询
  streamSearch: params => {
    /**
     *   params: {
     *      streamName: 河流名称
     *      codeWsystemWater: 流域代码
     *   }
     */
    const opt = {
      url: '/gems/mcs/wsystemstream/list',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 删除
  streamDelete: params => {
    /**
     *   params: {
     *      streamCodes: 河流代码或河流代码数组（','连接）
     *   }
     */
    const opt = {
      url: '/gems/waterbody/delete',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 添加
  streamAdd: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = {
      url: '/gems/waterbody/add',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 修改
  streamModify: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = {
      url: '/gems/waterbody/update',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 验证河流名称
  streamValid: params => {
    /**
     *   params: {
     *      streamName: 河流名称
     *      streamCode: 河流代码
     *   }
     */
    const opt = {
      url: '/gems/mcs/wsystemstream/valid',
      type: 'post',
      params: params
    };
    return requestData(opt);
  }
};

/* ----------------字典管理-------------------*/
export const dictionaryManagementServer = {
  // 查询
  dictionarySearch: params => {
    /**
     *   params: {
     *      generalName: 字典名称
     *      categoryClass: 字典类型
     *      generalCode: 字典编码
     *      page: 当前页码
     *      rows: 单页记录数
     *   }
     */
    const opt = {
      url: '/bfs/bfs/configuration/dictionary',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 字典添加
  dictionaryAdd: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = {
      url: '/bfs/bfs/configuration/dictionaryadd',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 字典修改
  dictionaryModify: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = {
      url: '/bfs/bfs/configuration/dictionaryedit',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 类型添加
  dicTypeAdd: params => {
    /**
     *   params: {
     *      // 表单对象
     *   }
     */
    const opt = {
      url: '/bfs/bfs/configuration/dictionarytypeadd',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 删除
  dictionaryDelete: params => {
    /**
     *   params: {
     *      generalCodes: 字典编码
     *   }
     */
    const opt = {
      url: '/bfs/bfs/configuration/dictionarydrop',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 字典类型字典
  categoryDictionary: params => {
    /**
     *   params: {
     *      type: 0（包含'全部'）/1（不包含'全部'）
     *   }
     */
    const opt = {
      url: '/bfs/bfs/configuration/categoryclass',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 验证字典编码
  dicNameValid: params => {
    /**
     *   params: {
     *      generalCode: 字典编码
     *   }
     */
    const opt = {
      url: '/bfs/bfs/configuration/validgeneral',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 验证类型编码
  typeCodeValid: params => {
    /**
     *   params: {
     *      categoryClass: 类型编码
     *   }
     */
    const opt = {
      url: '/bfs/bfs/configuration/validcategory',
      type: 'post',
      params: params
    };
    return requestData(opt);
  },

  // 验证类型名称
  typeNameValid: params => {
    /**
     *   params: {
     *      categoryName: 类型名称
     *   }
     */
    const opt = {
      url: '/bfs/bfs/configuration/validcategoryname',
      type: 'post',
      params: params
    };
    return requestData(opt);
  }
};
