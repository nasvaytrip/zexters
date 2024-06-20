import { baseAPI } from "../baseAPI";


export class DeleteFilesApi extends baseAPI {

constructor (page) {
    super (page);}

async deleteDocument(id) {
    const response = await this.page.request.post('https://gb-auto-u-srv2.demo.zextras.io/services/files/graphql', {
    data: {"operationName":"deleteNodes","variables":{"node_ids":id},"query":"mutation deleteNodes($node_ids: [ID!]) {\n  deleteNodes(node_ids: $node_ids)\n}"}
    });
    return response;
}

async getIDFromFiles() {
    let hg = [];
    const response = await this.page.request.post('https://gb-auto-u-srv2.demo.zextras.io/services/files/graphql', {
    data: {"operationName":"getChildren","variables":{"shares_limit":6,"node_id":"LOCAL_ROOT","children_limit":25,"sort":"NAME_ASC"},"query":"query getChildren($node_id: ID!, $children_limit: Int!, $page_token: String, $sort: NodeSort!, $shares_limit: Int = 1) {\n  getNode(node_id: $node_id) {\n    ...Parent\n    ... on Folder {\n      children(limit: $children_limit, page_token: $page_token, sort: $sort) {\n        nodes {\n          ...Child\n          __typename\n        }\n        page_token\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment Child on Node {\n  ...BaseNode\n  owner {\n    id\n    full_name\n    email\n    __typename\n  }\n  updated_at\n  last_editor {\n    id\n    full_name\n    email\n    __typename\n  }\n  shares(limit: $shares_limit) {\n    ...Share\n    __typename\n  }\n  __typename\n}\n\nfragment BaseNode on Node {\n  id\n  name\n  type\n  ...Permissions\n  ... on File {\n    size\n    mime_type\n    extension\n    version\n    __typename\n  }\n  flagged\n  rootId\n  __typename\n}\n\nfragment Permissions on Node {\n  permissions {\n    can_read\n    can_write_file\n    can_write_folder\n    can_delete\n    can_add_version\n    can_read_link\n    can_change_link\n    can_share\n    can_read_share\n    can_change_share\n    __typename\n  }\n  __typename\n}\n\nfragment Share on Share {\n  permission\n  share_target {\n    ... on User {\n      email\n      full_name\n      id\n      __typename\n    }\n    ... on DistributionList {\n      id\n      name\n      __typename\n    }\n    __typename\n  }\n  created_at\n  __typename\n}\n\nfragment Parent on Node {\n  id\n  name\n  type\n  owner {\n    id\n    full_name\n    email\n    __typename\n  }\n  ...Permissions\n  __typename\n}"}
});
const body = await this.GetResponceBody(response);
hg = body.data.getNode.children.nodes;
const gg = await Promise.all(await hg.map(item => {
    return item.id
}))
return gg;
}
};

