export const changeProgressBackground = (progress: number) => {
  if (progress <= 20) {
    return '#f00';
  } else if (progress <= 30) {
    return '#f86d2d';
  } else if (progress <= 40) {
    return '#ffae00';
  } else if (progress < 50) {
    return '#fbff00';
  } else if (progress <= 60) {
    return '#c8ff00';
  } else if (progress <= 80) {
    return '#c8ff00';
  } else if (progress <= 90) {
    return '#a0ff00';
  } else if (progress < 100) {
    return '#3cff00';
  } else {
    return '#00ff00';
  }
};

export const changeMarkColor = (mark: number) => {
  if (mark < 40) {
    return '#f00';;
  } else {
    return '#00f';
  }
}

export const handleSelectTopic = (setTopic: (selectedTopic: string) => {}) => {
  //setTopic(selectedTopic);
}

