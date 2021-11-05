export default {
  app: {
    name: 'Staking UI',
    desc: '给gxchain2.0节点投票'
  },
  index: {
    menu: '请选择'
  },
  notify: {
    install: '安装',
    ok: '好的',
    no: '不了',
    install_metamask: '请先安装Metamask',
    connect_failed: '连接钱包失败',
    wrong_network: '钱包连接的网络和当前网络不匹配，请把钱包中的网络切换为',
    confirm_delete: '是否确认删除',
    confirmation: '确认提示',
    login: '请先连接钱包'
  },
  code: {
    showAll: '显示全部'
  },
  settings: {
    language: '语言',
    darkMode: '夜间模式',
    light: '浅色',
    dark: '深色',
    auto: '自动'
  },
  account: {
    title: '账户信息',
    unlock: '连接钱包',
    connect: '选择一个钱包',
    connected_with: '已连接',
    copy_address: '复制地址',
    copied: '已复制',
    pending_txs: '{count}笔等待',
    view_on_etherscan: '在Etherscan查看',
    tip: '待打包交易将出现在这里...',
    rencent_txs: '最近交易',
    clear_all: '清空'
  },
  txs: {
    stake: '投票{amount}{symbol}到{to}',
    startunstake: '发起取回投票{amount}{symbol}到{to}',
    startclaim: '发起取回奖励{amount}{symbol}到{to}',
    setrate: '修改分红比例为{amount}%',
    unstake: '取回{amount}{symbol}到{to}',

  },
  stake: {
    node_list: '节点列表',
    set_commission_rate: '设置分红比例',
    stake_to_other_node: '给其他地址投票',
    index: '序号',
    node: '节点',
    voting_power: '票数',
    share_balance: '股份余额',
    operation: '操作',
    staking: '投票',
    claim: '赎回',
    get_reward: '取回收益',
    staking_info: '投票信息',
    amount: '金额',
    address: '地址',
    btn_submit: '提交',
    btn_cancel: '取消',
    claim_info: '取回投票信息',
    commonnsion_share_balance:'股份余额：',
    estimate_receive: '预估可获得',
    reward_info: '奖励信息',
    reward_balance: '奖励余额：',
    commission_rate: '分红比例',
    last_update_time: '上次更新时间'
  },
  msg: {
    please_input_number: '请输入数字',
    please_input_1_100_num: '请输入1-100的整数',
    please_input_amount: '请输入金额',
    please_input_correct_num: '请输入正确的数字',
    please_input_address: '请输入地址'
  },
  unstake:{
    title: '赎回',
    list_title: '赎回列表',
    node: '节点',
    create_time: '创建时间',
    shares: '销毁的份额',
    get_value: '期望取回的资产',
    status: '状态',
    opertion: '操作',
    gettitle: '取回',
    retrieve: '已取回',
    not_retrieve: '未取回'
  }
};