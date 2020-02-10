import React, { useEffect, useState } from "react";
import { getNews } from "../../actions/NewsActions";
import { connect } from "react-redux";
import ListItem from "../common/ListItem";
import Spinner from "../common/Spinner";
import Container from "../common/Container";
import ToolBar from "../common/ToolBar";

const News = props => {
  const [limit, setLimit] = useState(30);
  const [count, setCount] = useState(0);

  const { data, totalItems, loading } = props.news;

  let newsContent;

  useEffect(() => {
    const { count, limit } = props.news;

    // news data being fetched from the api
    props.getNews(count, limit);
  }, []);

  useEffect(() => {
    // updating the count from redux on change in props
    setCount(props.news.count);
  }, [props.news.count]);

  // on every next arrow click
  const onIncreaseCount = () => {
    props.getNews(count + limit, limit);
  };

  // on every previous arrow click
  const onDecreaseCount = () => {
    props.getNews(count - limit, limit);
  };

  // if data is being fetched or there is no data at all
  if (data.length <= 0 || loading) {
    newsContent = <Spinner />;
  } else if (data.length > 0) {
    newsContent = data.map((item, index) => (
      <ListItem
        descendants={item.descendants}
        time={item.time}
        title={`${count + 1 + index}. ${item.title}`}
        website={item.url}
        by={item.by}
        score={item.score}
      />
    ));
  } else {
    newsContent = <h4>That's all for now!</h4>;
  }

  return (
    <Container>
      <ToolBar
        limit={limit}
        count={count}
        totalItems={totalItems}
        onIncreaseCount={onIncreaseCount}
        onDecreaseCount={onDecreaseCount}
      />
      {newsContent}
    </Container>
  );
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(mapStateToProps, { getNews })(News);
