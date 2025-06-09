import { Button, Card, Checkbox, Form, Input, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Wrapper } from "./styles";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

interface IProps {
  isLoading: boolean;
  onFinish: (values: FieldType) => void;
  onFinishFailed: (values: any) => void;
}

function LoginView({ isLoading, onFinish, onFinishFailed }: IProps) {
  return (
    <Wrapper className="w-screen h-screen flex justify-center items-center">
      <Card>
        <div className="py-9 px-20">
          <div className="mb-16 text-center ">
            <p className="text-4xl font-extrabold">Sign in</p>
            <p className="text-base font-normal">
              Don't have an account? Click here to sign up
            </p>
          </div>
          <div className="">
            <Form
              name="login"
              layout="vertical"
              wrapperCol={{ span: 24 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                label={null}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item label={null}>
                {isLoading ? (
                  <Button type="primary" htmlType="submit" disabled block>
                    <Spin indicator={<LoadingOutlined spin />} size="small" />
                    Submit
                  </Button>
                ) : (
                  <Button type="primary" htmlType="submit" block>
                    Submit
                  </Button>
                )}
              </Form.Item>
            </Form>
          </div>
        </div>
      </Card>
    </Wrapper>
  );
}

export default LoginView;
