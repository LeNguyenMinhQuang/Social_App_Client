export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth", // Để có hiệu ứng cuộn mượt mà
  });
};
