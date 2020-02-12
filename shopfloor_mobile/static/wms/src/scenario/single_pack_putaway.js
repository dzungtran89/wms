import {ScenarioBaseMixin, GenericStatesMixin} from "./mixins.js";

export var SinglePackPutAway = Vue.component('single-pack-putaway', {
    mixins: [ScenarioBaseMixin, GenericStatesMixin],
    template: `
        <Screen title="Single pack putaway">
            <!-- FOR DEBUG -->
            <!-- {{ current_state_key }} -->
            <searchbar v-on:found="on_scan" :input_placeholder="search_input_placeholder"></searchbar>
            <user-information v-if="!need_confirmation && user_notification.message" v-bind:info="user_notification"></user-information>
            <user-confirmation v-if="need_confirmation" v-on:user-confirmation="on_user_confirm" v-bind:question="user_notification.message"></user-confirmation>
            <operation-detail :operation="erp_data.data"></operation-detail>
            <cancel-button v-on:cancel="on_cancel" v-if="show_cancel_button"></cancel-button>
        </Screen>
    `,
    data: function () {
        return {
            'usage': 'single_pack_putaway',
            'show_reset_button': true,
            'initial_state_key': 'start_scan_pack',
            'current_state_key': 'start_scan_pack',
        }
    },
})
