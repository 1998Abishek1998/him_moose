import { removeEmpty } from "./removeEmpty";

const request = async (
  /** @type {string} */ method,
  /** @type {URL | RequestInfo} */ url,
  params = {}
) => {
  const req = {
    method: method,
    credentials: "include",
    headers: {
      Accept: "application/json",
    },
    body: {},
  };

  if (method === "GET") {
    const getParams = new URLSearchParams(removeEmpty(params));
    url += `?${getParams}`;
  } else if (params instanceof FormData) {
    req.body = params;
  } else {
    // @ts-ignore
    req.headers["Content-Type"] = "application/json";
    req.body = JSON.stringify(removeEmpty(params));
  }
  // @ts-ignore
  const res = await fetch(url, req);
  const data = await res.json();
  // @ts-ignore
  if (res.failed || !res.ok) {
    throw new ResponseError(data.message, data.errors);
  }

  return data;
};

class ResponseError extends Error {
  /**
   * @param {string | undefined} msg
   * @param {any} errors
   */
  constructor(msg, errors) {
    super(msg);
    this.errors = errors;
  }
}

export default request;
