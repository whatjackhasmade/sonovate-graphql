import { Link } from "sonovate";

import { TemplateBase } from "sonovate";

import type { BlogPost } from "sonovate-types";

const TemplatePost = (props: BlogPost) => {
	const { body, title } = props;

	return (
		<TemplateBase>
			<article>
				<nav>
					<Link to="/">View all posts</Link>
				</nav>
				{title && <h1>{title}</h1>}

				{body}
			</article>
		</TemplateBase>
	);
};

TemplatePost.defaultProps = {};

export { TemplatePost };
export default TemplatePost;
