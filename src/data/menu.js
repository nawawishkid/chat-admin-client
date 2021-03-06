const templateNew = {
  type: "item",
  name: "New",
  path: "/admin/templates/new"
};
const templateTrash = {
  type: "item",
  name: "Trash",
  path: "/admin/templates/trash"
};
const templates = {
  type: "sub",
  title: "Templates", // Title of submenu header
  items: [templateNew, templateTrash],
  name: "All",
  path: "/admin/templates"
};

const templateInputNew = {
  type: "item",
  name: "New",
  path: "/admin/template-inputs/new"
};
const templateInputTrash = {
  type: "item",
  name: "Trash",
  path: "/admin/template-inputs/trash"
};
const templateInputs = {
  type: "sub",
  title: "Template inputs", // Title of submenu header
  items: [templateInputNew, templateInputTrash],
  name: "All",
  path: "/admin/template-inputs"
};

const profile = {
  type: "item",
  name: "Profile",
  path: "/admin/profile"
};

const settingsAccount = {
  type: "item",
  path: "/admin/settings/account",
  name: "Account"
};
const settings = {
  type: "sub",
  title: "Settings",
  items: [settingsAccount]
	// This menu doesn't have its own page
};

export {
  templates,
  templateNew,
  templateTrash,
  templateInputs,
  templateInputNew,
  templateInputTrash,
  profile,
  settings,
	settingsAccount
};

export default [templates, templateInputs, profile, settings];
