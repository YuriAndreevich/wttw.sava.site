const StatusHandler = ({ loading, error, noDataMessage, children }) => {
    if (loading) {
      return (
        <div className="">Загрузка...</div>
      );
    }
  
    if (error) {
      return (
        <div className="">
          Ошибка: {error}
        </div>
      );
    }
  
    if (!children) {
      return (
        <div className="">
          {noDataMessage || "Данные не найдены."}
        </div>
      );
    }
  
    return <>{children}</>;
  };
  
  export default StatusHandler;
  