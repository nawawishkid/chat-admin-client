import APIGroup from "~/src/services/api/Model";

const userApi = new APIGroup("/api/users");
const options = { auth: true };

userApi.add("get", "get", "/", options);
userApi.add("create", "post", "/", options);
userApi.add("update", "post", "/update", options);
userApi.add("delete", "post", "/delete", options);

userApi.on("all", (err, res, status) => {
  console.log("err: ", err);
  console.log("res: ", res);
  if (err) {
    console.error(`${status}: ${err.statusText} (${err.data.msg})`);
    return;
  }

  console.log(`${status}: ${res.msg}`);
  console.log("API data: ", res.data);
});

export { userApi };

export default userApi;
