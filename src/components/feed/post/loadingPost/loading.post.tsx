import { Card, Spin } from "antd";

import { LoadingOutlined } from "@ant-design/icons";

function LoadingPost({ status }: { status: boolean }) {
  return (
    <div className="mt-6">
      {status ? (
        <Card>
          <div className="flex gap-3">
            <Spin indicator={<LoadingOutlined spin />} />
            <span className="text-base">New post is comming...</span>
          </div>
        </Card>
      ) : (
        <Card>
          <div className="flex gap-3">
            <span className="text-base">
              You've reached the end! No more posts to load.
            </span>
          </div>
        </Card>
      )}
    </div>
  );
}

export default LoadingPost;
