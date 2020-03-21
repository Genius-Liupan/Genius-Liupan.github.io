/**
 *  Date    : 2020/3/21
 *  Author  : CastileMan
 *  Declare : 画廊路由
 */

import PAGE from '@/constants/page';

export default [
  {
    title: '后台设计',
    link: PAGE.PC,
    children: [
      {
        title: 'RAYS系统',
        link: PAGE.PC_RAYS
      },
      {
        title: '重构设计',
        link: PAGE.PC_RECONSTITUTION
      },
      {
        title: 'ERP系统设计',
        link: PAGE.PC_ERP
      },
      {
        title: '编辑器设计',
        link: PAGE.PC_EDITOR
      }
    ]
  },
  {
    title: '建立规范',
    link: PAGE.STANDARD,
    children: [
      {
        title: 'PC端规范',
        link: PAGE.STANDARD_PC
      },
      {
        title: '移动端规范',
        link: PAGE.STANDARD_MOBILE
      }
    ]
  },
  {
    title: '移动端设计',
    link: PAGE.MOBILE,
    children: [
      {
        title: 'H5页面设计',
        link: PAGE.MOBILE_H5
      },
      {
        title: 'APP设计',
        link: PAGE.MOBILE_APP
      }
    ]
  },
  {
    title: '其它设计',
    link: PAGE.OTHERS,
    children: [
      {
        title: '插画设计',
        link: PAGE.INBETWEENING
      },
      {
        title: 'IP设计',
        link: PAGE.IP
      }
    ]
  }
]
