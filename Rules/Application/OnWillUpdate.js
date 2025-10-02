/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/blogdemoappcursor/Actions/Application/OnWillUpdate.action').then((result) => {
        if (result.data) {
            let close_BlogMobileDemoDestination3 = clientAPI.executeAction('/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Service/CloseOffline.action');
            return Promise.all([close_BlogMobileDemoDestination3]).then(() => {
                Promise.resolve();
            }).catch((err) => {
                Promise.reject('Offline Odata Close Failed ' + err.message);
            });
        } else {
            return Promise.reject('User Deferred');
        }
    });
}