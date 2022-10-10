import { render } from "@testing-library/react";

import FaqItem from "./FaqItem";

describe("FaqItem", () => {
	it("renders a FAQ item", () => {
		const view = render(
			<FaqItem
				question="What is the answer to life the universe and everything?"
				answer="42"
			/>
		);
		expect(view).toMatchSnapshot();
	});
});
