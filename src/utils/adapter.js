export const childrenAdapter = (children) => children.map((child) => {
  const childObj = { id: child.id, name: child.name };
  childObj.parent = child.parent ? child.parent.name : 'No parent';
  childObj.goodSpace = child.goodSpace ? true : false;
  childObj.camp = child.camp ? child.camp.name : 'No camp';
  return childObj;
});

export const parentAdapter = (parents) => parents.map((parent) => {
  const parentObj = { id: parent.id };
  parentObj.name = parent.name !== '' ? parent.name : ' - '
  parentObj.followerCount = parent.followerCount ? parent.followerCount : 0;
  parentObj.childrenCount = parent.childrenCount ? parent.childrenCount : 0;
  parentObj.nature = parent.nationality ? parent.nationality : 'None Nature';
  return parentObj;
});

export const campAdapter = (camps) => camps.map((camp) => {
  const campObj = { id: camp.id };
  campObj.name = camp.name != null ? camp.name : 'No Name';
  campObj.location = camp.province;
  campObj.goodSpace = camp.has_goodspace;
  return campObj;
});