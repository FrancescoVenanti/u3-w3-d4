import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

interface ArticleItem {
	id: number;
	title: string;
	published_at: string;
	summary: string;
	featured: boolean;
	image_url: string;
	url: string;
}

const SingleNew = () => {
	const [article, setArticle] = useState<ArticleItem | null>(null);
	const paramsId = useParams();
	console.log(paramsId.singleNew);
	const url = "https://api.spaceflightnewsapi.net/v4/articles/";
	const fetchArticle = async () => {
		try {
			const response = await fetch(url + paramsId.singleNew);
			if (response.ok) {
				const data = await response.json();
				setArticle(data);

				console.log(article);
			} else {
				alert("Error fetching results");
			}
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		fetchArticle();
	}, [paramsId.singleNew]);
	return (
		<Container className="text-center">
			<Row className="mt-3 text-start">
				{article && (
					<Col xs={8} className="offset-2">
						<h1>{article.title}</h1>
						<p>{article.summary}</p>
						<img className="d-block rounded-4" style={{ width: 500 }} src={article.image_url} alt="" />
						<Link to={article.url}>
							<Button className="btn btn-primary mt-3">Read more...</Button>
						</Link>
					</Col>
				)}
			</Row>
		</Container>
	);
};

export default SingleNew;
