import IArticle from "../interface/article";

export const getArticles = async (): Promise<IArticle[]> => {
  try {
    const response = await fetch("http://localhost:5000/api/v1/articles");
    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching articles: ${error}`);
  }
};
