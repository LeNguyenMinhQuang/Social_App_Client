export const getAvatar = (avatar: string | null | undefined): string | null => {
  if (avatar) {
    return `${import.meta.env.VITE_SERVER_IMAGE_URL}/images/avatar/${avatar}`;
  } else {
    return null;
  }
};

export const getImagePost = (image: string | null | undefined): string => {
  return `${import.meta.env.VITE_SERVER_IMAGE_URL}/images/post/${image}`;
};
