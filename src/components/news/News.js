import React, { Component } from "react";
import { getNews } from "../../actions/NewsActions";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined
} from "@material-ui/icons";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import ListItem from "../common/ListItem";
import Spinner from "../common/Spinner";
import Container from "../common/Container";
import ToolBar from "../common/ToolBar";

class News extends Component {
  state = {
    limit: 30,
    count: 0,
    data: []
  };

  componentDidMount() {
    const { count, limit } = this.props.news;

    // news data being fetched from the api
    this.props.getNews(count, limit);
  }

  componentWillReceiveProps(nextProps) {
    const { count } = this.state;

    // updating the count from redux on change in props
    if (nextProps.news.count !== count) {
      this.setState({ count: nextProps.news.count });
    }
  }

  // on every next arrow click
  onIncreaseCount = () => {
    const { count, limit } = this.state;

    this.props.getNews(count + limit, limit);
  };

  // on every previous arrow click
  onDecreaseCount = () => {
    const { count, limit } = this.state;

    this.props.getNews(count - limit, limit);
  };

  render() {
    const { count, limit } = this.state;

    const { data, totalItems, loading } = this.props.news;

    let newsContent;

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
          onIncreaseCount={this.onIncreaseCount}
          onDecreaseCount={this.onDecreaseCount}
        />
        {newsContent}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { getNews }
)(News);
