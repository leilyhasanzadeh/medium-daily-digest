import withLoading from "./hocs/withLoading";
import withErrorHandling from "./hocs/withErrorHandling"; // Yeni HOC eklendi
import useFetch from "./hooks/useFetch";
import List from "./components/List";

const ListWithLoading = withLoading(List);
const ListWithErrorHandling = withErrorHandling(ListWithLoading); // ListWithLoading bileşenine hata işleme eklemek için kullanıldı

const App = () => {
  const { data, isLoading, error } = useFetch("https://api.myanimelist.net/v2");

  return (
    <div>
      <h1>List Component</h1>
      <ListWithErrorHandling data={data} isLoading={isLoading} error={error} />
    </div>
  );
};

export default App;
