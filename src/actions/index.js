export const Types = {
  SET_VM: "SET_VM",
  SET_SIDE_MENU_COLLAPSED: "SET_SIDE_MENU_COLLAPSED",
};

export const setVM = (vm) => ({
  type: Types.SET_VM,
  vm,
});

export const setSideMenuCollapsed = (isCollapsed) => ({
  type: Types.SET_SIDE_MENU_COLLAPSED,
  isCollapsed,
});
