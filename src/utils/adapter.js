export const childrenAdapter = (children) => children.map((child) => {
  const childObj = { id: child.id, name: child.name };
  childObj.parent = child.parent ? child.parent.name : 'No parent';
  childObj.goodSpace = child.goodSpace ? true : false;
  childObj.camp = child.camp ? child.camp.name : 'No camp';
  return childObj;
})