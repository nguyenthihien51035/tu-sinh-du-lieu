import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Card, Button, Form, Input } from 'antd';

function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FaEnvelope className="inline-block text-6xl text-purple-600 mb-4" />
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: 'Please input your name!' }]}
                >
                  <Input placeholder="Your name" />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' }
                  ]}
                >
                  <Input placeholder="your@email.com" />
                </Form.Item>

                <Form.Item
                  label="Message"
                  name="message"
                  rules={[{ required: true, message: 'Please input your message!' }]}
                >
                  <Input.TextArea rows={4} placeholder="Your message" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>

            <div className="space-y-6">
              <Card className="shadow-lg">
                <div className="flex items-center gap-4">
                  <FaPhone className="text-3xl text-purple-600" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">+1 234 567 8900</p>
                  </div>
                </div>
              </Card>

              <Card className="shadow-lg">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-3xl text-purple-600" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">info@example.com</p>
                  </div>
                </div>
              </Card>

              <Card className="shadow-lg">
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-3xl text-purple-600" />
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">123 Main St, City, Country</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Link to="/">
              <Button type="primary" size="large">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
