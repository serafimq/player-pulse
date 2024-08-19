import { Post } from "../../../entities/Post";
import { rtkApi } from "../../../shared/api/rtkApi";

interface getUserPostsArg {
    limit: number;
}

const userPostsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUserPosts: build.query<Post[], getUserPostsArg>({
            query: ({limit}) => ({
                url: `/posts?_limit=${limit}`
            })
        })
    })
});

export const useGetUserPosts = userPostsApi.useGetUserPostsQuery;