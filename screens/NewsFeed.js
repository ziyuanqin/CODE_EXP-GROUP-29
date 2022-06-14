import React from "react";
import { FlatList } from "react-native";

// Import getNews from news.js
import { getNews } from "./src/news";
import Article from "./src/Article";

export default class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    //invoked immediately after mounted
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then((articles) => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false })); //catch to handle rejected cases
  }

  handleRefresh() {
    //start spinner animation and call fetchNews()
    this.setState(
      {
        refreshing: true,
      },
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />} //this Article is from Article.js
        keyExtractor={(item) => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
    );
  }
}
