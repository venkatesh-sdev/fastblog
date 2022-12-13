import React from "react";
import PortableText from "react-portable-text";

const BlogBody = ({ post }) => {
  return (
    <div className="max-w-3xl mx-auto my-5">
      <PortableText
        content={post.body}
        projectId={"fgkks6qq"}
        dataset={"production"}
        serializers={{
          h1: (props) => (
            <h1 className="mt-5 text-2xl font-serif font-bold" {...props} />
          ),
          h2: (props) => (
            <h2 className="mt-5 text-xl font-semibold" {...props} />
          ),
          p: (props) => <p className="mt-5 " {...props} />,
          li: ({ children }) => <li className="ml-5 list-disc">{children}</li>,
          link: (children, href) => {
            <a href={href} className="text-blue-600">
              {children}
            </a>;
          },
        }}
      />
    </div>
  );
};

export default BlogBody;
