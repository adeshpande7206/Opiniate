// This is an action creator which makes action objects with a key HTTP_ACTION
// when this type of action is gone through our middleware(httpMiddleware)
// then it does the async requests and if there is no such key called HTTP_ACTION it just passes it down to next

export default httpAction = (action) => {
  const httpActionTemplate = {
    type: "",
    //   url method and body in payload when required | default are set to null GET and null as you can see
    url: null,
    method: "GET",
    payload: null,
  };

  return {
    HTTP_ACTION: Object.assign({}, httpActionTemplate, action),
  };
};
