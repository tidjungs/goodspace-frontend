export const childrenAdapter = (children) => children.map((child) => {
  const childObj = { id: child.id, name: child.name };
  childObj.parent = child.Parent ? child.Parent.name : 'No parent';
  childObj.goodSpace = child.Camp ? child.Camp.has_goodspace : false;
  childObj.camp = child.Camp ? child.Camp.id : 'No camp';
  return childObj;
});

export const parentAdapter = (parents) => parents.map((parent) => {
  const parentObj = { id: parent.id };
  parentObj.name = parent.name !== '' ? parent.name : ' - '
  parentObj.followerCount = parent.follower ? parent.follower.length : 0;
  parentObj.childrenCount = parent.Children ? parent.Children.length : 0;
  parentObj.nature = parent.nationality ? parent.nationality : ' - ';
  return parentObj;
});

export const campAdapter = (camps) => camps.map((camp) => {
  const campObj = { id: camp.id };
  campObj.name = camp.name != null ? camp.name : 'No Name';
  campObj.location = camp.province;
  campObj.goodSpace = camp.has_goodspace;
  return campObj;
});
