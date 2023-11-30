export const fromNode = (d, sl) => {
  if (!sl || !d) return `Parameters should not be empty!`;

  if (typeof d == "string") {
    let nodeArrP = document.querySelectorAll(d);
    d = nodeArrP.length > 1 ? nodeArrP : nodeArrP[0];
  }

  if (d.length) {
    let nodeList = [];

    d.forEach((element) => {
      let pArr = element.querySelectorAll(sl);
      nodeList.push(...pArr);
    });

    return nodeList;
  } else {
    let nodeArr = d.querySelectorAll(sl);
    return nodeArr.length > 1 ? nodeArr : nodeArr[0];
  }
};
