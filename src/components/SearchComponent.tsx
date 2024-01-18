import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

interface NewsItem {
	id: number;
	title: string;
	published_at: string;
	summary: string;
	featured: boolean;
}

const SearchComponent = () => {
	const [news, setNews] = useState<NewsItem[] | null>(null);

	useEffect(() => {
		fetchNews();
	}, []);

	const url = "https://api.spaceflightnewsapi.net/v4/articles";
	const fetchNews = async () => {
		try {
			const response = await fetch(url);
			if (response.ok) {
				const data = await response.json();
				await setNews(data.results);
			} else {
				alert("Error fetching results");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Container className="text-start mt-4">
			{news &&
				news.map((oneNew) => (
					<Link key={oneNew.id} className="text-black text-decoration-none" to={`/${oneNew.id}`}>
						<div className="mb-3 border rounded p-2 bg-light">
							{" "}
							<h3>{oneNew.title}</h3>
							<p>{oneNew.summary}</p>
						</div>
					</Link>
				))}
		</Container>
	);
};

export default SearchComponent;
