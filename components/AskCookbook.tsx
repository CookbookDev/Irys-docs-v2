import AskCookbook from "@cookbookdev/docsbot/react";


const AskCookbookComponent = () => {
  const COOKBOOK_PUBLIC_API_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmYyZmU4YTA0YjdjNTdkMjk4ZDJjYWIiLCJpYXQiOjE3MjcyMDA5MDYsImV4cCI6MjA0Mjc3NjkwNn0.bisWJ3pRHZWk40nIgO5Mt3k0KRHPnvC-qLkCYLNmD0o` ;

  return (
    <AskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} />
  );
};

export default AskCookbookComponent;