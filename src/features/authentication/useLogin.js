import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => {
      return loginApi({ email, password });
    },
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR ", err);
      toast.error("Provided email or password is not correct");
    },
  });
  return { login, isPending };
}

// import { useMutation } from "@tanstack/react-query";
// import { login as loginApi } from "../../services/apiAuth";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// export function useLogin() {
//   const navigate = useNavigate();
//   const { mutate: login, isLoading } = useMutation({
//     mutationFn: loginApi,
//     onSuccess: (user) => {
//       console.log(user);

//       navigate("/dashboard");
//     },
//     onError: (err) => {
//       console.log("ERROR ", err);
//       toast.error("Provided emial or password is not correct");
//     },
//   });
//   return { login, isLoading };
// }
