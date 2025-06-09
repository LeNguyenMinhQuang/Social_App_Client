import axiosClient from "../axios/axiosClient";
import { PATH_UPLOAD_ONE_FILE } from "../apiPath/path";
import type { UploadFilePayload } from "../../datatypes/types";

const uploadOneFile = async ({
  formData,
  folderType,
}: UploadFilePayload): Promise<string | null | undefined> => {
  try {
    // console.log(file);
    const response = await axiosClient.post(PATH_UPLOAD_ONE_FILE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        folder_type: `${folderType}`,
      },
    });
    return response.data.data;
  } catch (error) {}
  return null;
};

export { uploadOneFile };
