/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var App = require('app');

require('config');

require('messages');
require('utils');
require('mixins');
require('models');
require('controllers');
require('views');
require('utils/handlebars_helpers');
require('router');
require('mappers');

require('utils/ajax/ajax');
require('utils/ajax/ajax_queue');

var files = [
  'test/init_test',
  'test/init_computed_aliases',
  'test/init_model_test',
  'test/app_test',
  'test/data/configs/site_properties_test',
  'test/controllers/global/background_operations_test',
  'test/controllers/global/cluster_controller_test',
  'test/controllers/global/update_controller_test',
  'test/controllers/global/configuration_controller_test',
  'test/controllers/global/wizard_watcher_controller_test',
  'test/controllers/global/user_settings_controller_test',
  'test/controllers/global/errors_handler_controller_test',
  'test/controllers/main/alert_definitions_controller_test',
  'test/controllers/main/alerts/alert_definitions_actions_controller_test',
  'test/controllers/main/alerts/definitions_configs_controller_test',
  'test/controllers/main/alerts/definitions_details_controller_test',
  'test/controllers/main/alerts/alert_instances_controller_test',
  'test/controllers/main/alerts/add_alert_definition/add_alert_definition_controller_test',
  'test/controllers/main/alerts/add_alert_definition/step1_controller_test',
  'test/controllers/main/alerts/manage_alert_notifications_controller_test',
  'test/controllers/main/admin/kerberos_test',
  'test/controllers/main/admin/kerberos/kerberos_wizard_controler_test',
  'test/controllers/main/admin/kerberos/disable_controller_test',
  'test/controllers/main/admin/kerberos/step1_controller_test',
  'test/controllers/main/admin/kerberos/step2_controller_test',
  'test/controllers/main/admin/kerberos/step3_controller_test',
  'test/controllers/main/admin/kerberos/step4_controller_test',
  'test/controllers/main/admin/kerberos/step5_controller_test',
  'test/controllers/main/admin/kerberos/step6_controller_test',
  'test/controllers/main/admin/kerberos/step7_controller_test',
  'test/controllers/main/admin/kerberos/step8_controller_test',
  'test/controllers/main/admin/service_auto_start_test',
  'test/controllers/main/admin/stack_and_upgrade_controller_test',
  'test/controllers/main/admin/stack_upgrade_history_controller_test',
  'test/controllers/main/admin/serviceAccounts_controller_test',
  'test/controllers/main/admin/highAvailability_controller_test',
  'test/controllers/main/admin/highAvailability/progress_controller_test',
  'test/controllers/main/admin/highAvailability/progress_popup_controller_test',
  'test/controllers/main/admin/highAvailability/nameNode/step1_controller_test',
  'test/controllers/main/admin/highAvailability/nameNode/step2_controller_test',
  'test/controllers/main/admin/highAvailability/nameNode/step3_controller_test',
  'test/controllers/main/admin/highAvailability/nameNode/step4_controller_test',
  'test/controllers/main/admin/highAvailability/nameNode/step5_controller_test',
  'test/controllers/main/admin/highAvailability/nameNode/step6_controller_test',
  'test/controllers/main/admin/highAvailability/nameNode/step7_controller_test',
  'test/controllers/main/admin/highAvailability/nameNode/step8_controller_test',
  'test/controllers/main/admin/highAvailability/nameNode/step9_controller_test',
  'test/controllers/main/admin/highAvailability/nameNode/wizard_controller_test',
  'test/controllers/main/admin/highAvailability/resourceManager/step3_controller_test',
  'test/controllers/main/admin/highAvailability/resourceManager/step4_controller_test',
  'test/controllers/main/admin/highAvailability/resourceManager/wizard_controller_test',
  'test/controllers/main/admin/highAvailability/hawq/addStandby/step3_controller_test',
  'test/controllers/main/admin/highAvailability/hawq/removeStandby/step2_controller_test',
  'test/controllers/main/admin/highAvailability/hawq/activateStandby/step2_controller_test',
  'test/controllers/main/admin/highAvailability/journalNode/progress_controller_test',
  'test/controllers/main/admin/highAvailability/journalNode/step1_controller_test',
  'test/controllers/main/admin/highAvailability/journalNode/step2_controller_test',
  'test/controllers/main/admin/highAvailability/journalNode/step4_controller_test',
  'test/controllers/main/admin/highAvailability/journalNode/step6_controller_test',
  'test/controllers/main/admin/highAvailability/journalNode/step7_controller_test',
  'test/controllers/main/admin/highAvailability/journalNode/step8_controller_test',
  'test/controllers/main/admin/highAvailability/journalNode/wizard_controller_test',
  'test/controllers/main/admin/highAvailability/rangerAdmin/step3_controller_test',
  'test/controllers/main/dashboard/config_history_controller_test',
  'test/controllers/main/charts/heatmap_test',
  'test/controllers/main/charts/heatmap_metrics/heatmap_metric_test',
  'test/controllers/main/alerts/manage_alert_groups_controller_test',
  'test/controllers/main/host/add_controller_test',
  'test/controllers/main/host/bulk_operations_controller_test',
  'test/controllers/main/host/host_alerts_controller_test',
  'test/controllers/main/host/configs_service_test',
  'test/controllers/main/host/details_test',
  'test/controllers/main/host/addHost/step4_controller_test',
  'test/controllers/main/service/add_controller_test',
  'test/controllers/main/service/manage_config_groups_controller_test',
  'test/controllers/main/service/reassign_controller_test',
  'test/controllers/main/service/reassign/step1_controller_test',
  'test/controllers/main/service/reassign/step2_controller_test',
  'test/controllers/main/service/reassign/step3_controller_test',
  'test/controllers/main/service/reassign/step4_controller_test',
  'test/controllers/main/service/reassign/step6_controller_test',
  'test/controllers/main/service/reassign/step7_controller_test',
  'test/controllers/main/service/widgets/create/wizard_controller_test',
  'test/controllers/main/service/widgets/create/step1_controller_test',
  'test/controllers/main/service/widgets/create/step2_controller_test',
  'test/controllers/main/service/widgets/create/step3_controller_test',
  'test/controllers/main/dashboard_test',
  'test/controllers/main/host_test',
  'test/controllers/main/service/item_test',
  'test/controllers/main/service/info/config_test',
  'test/controllers/main/service/info/summary_test',
  'test/controllers/main/service_test',
  'test/controllers/main/admin_test',
  'test/controllers/main/views_controller_test',
  'test/controllers/installer_test',
  'test/controllers/application_test',
  'test/controllers/main_test',
  'test/controllers/login_controller_test',
  'test/controllers/experimental_test',
  'test/controllers/wizard_test',
  'test/controllers/wizard/step0_test',
  'test/controllers/wizard/step1_test',
  'test/controllers/wizard/step2_test',
  'test/controllers/wizard/step3_test',
  'test/controllers/wizard/step4_test',
  'test/controllers/wizard/step5_test',
  'test/controllers/wizard/step6_test',
  'test/controllers/wizard/step7_test',
  'test/controllers/wizard/step7/pre_install_checks_controller_test',
  'test/controllers/wizard/step7/assign_master_controller_test',
  'test/controllers/wizard/step8_test',
  'test/controllers/wizard/step9_test',
  'test/controllers/wizard/step10_test',
  'test/login_test',
  'test/router_test',
  'test/mappers/alert_groups_mapper_test',
  'test/mappers/alert_instances_mapper_test',
  'test/mappers/alert_definitions_mapper_test',
  'test/mappers/alert_definition_summary_mapper_test',
  'test/mappers/server_data_mapper_test',
  'test/mappers/hosts_mapper_test',
  'test/mappers/service_mapper_test',
  'test/mappers/service_metrics_mapper_test',
  'test/mappers/status_mapper_test',
  'test/mappers/users_mapper_test',
  'test/mappers/stack_mapper_test',
  'test/mappers/stack_service_mapper_test',
  'test/mappers/repository_version_mapper_test',
  'test/mappers/stack_upgrade_history_mapper_test',
  'test/mappers/configs/config_groups_mapper_test',
  'test/mappers/configs/service_config_version_mapper_test',
  'test/mappers/configs/themes_mapper_test',
  'test/mixins/common/configs/enhanced_configs_test',
  'test/mixins/common/configs/config_recommendations_test',
  'test/mixins/common/configs/config_recommendation_parser_test',
  'test/mixins/common/configs/config_with_override_recommendation_parser_test',
  'test/mixins/common/configs/configs_comparator_test',
  'test/mixins/common/configs/configs_loader_test',
  'test/mixins/common/configs/configs_saver_test',
  'test/mixins/common/configs/toggle_isrequired_test',
  'test/mixins/common/hosts/host_component_recommendation_mixin_test',
  'test/mixins/common/hosts/host_component_validation_mixin_test',
  'test/mixins/common/widgets/export_metrics_mixin_test',
  'test/mixins/common/widgets/time_range_mixin_test',
  'test/mixins/common/widgets/widget_section_test',
  'test/mixins/common/loading_overlay_support_test',
  'test/mixins/common/kdc_credentials_controller_mixin_test',
  'test/mixins/common/localStorage_test',
  'test/mixins/common/reload_popup_test',
  'test/mixins/common/serverValidator_test',
  'test/mixins/common/table_server_view_mixin_test',
  'test/mixins/common/widget_mixin_test',
  'test/mixins/common/persist_test',
  'test/mixins/main/host/details/host_components/decommissionable_test',
  'test/mixins/main/host/details/host_components/install_component_test',
  'test/mixins/main/service/configs/widget_popover_support_test',
  'test/mixins/main/service/configs/config_overridable_test',
  'test/mixins/main/service/configs/component_actions_by_configs_test',
  'test/mixins/routers/redirections_test',
  'test/mixins/wizard/addSeccurityConfigs_test',
  'test/mixins/wizard/assign_master_components_test',
  'test/mixins/wizard/wizard_menu_view_test',
  'test/mixins/wizard/wizardProgressPageController_test',
  'test/mixins/wizard/wizardEnableDone_test',
  'test/mixins/unit_convert/base_unit_convert_mixin_test',
  'test/utils/ajax/ajax_test',
  'test/utils/ajax/ajax_queue_test',
  'test/utils/action_sequence_test',
  'test/utils/array_utils_test',
  'test/utils/batch_scheduled_requests_test',
  'test/utils/blueprint_test',
  'test/utils/config_test',
  'test/utils/configs_collection_test',
  'test/utils/credentials_test',
  'test/utils/date/date_test',
  'test/utils/date/timezone_test',
  'test/utils/data_manipulation_test',
  'test/utils/config_test',
  'test/utils/db_test',
  'test/utils/ember_computed_test',
  'test/utils/ember_reopen_test',
  'test/utils/form_field_test',
  'test/utils/file_utils_test',
  'test/utils/handlebars_helpers_test',
  'test/utils/heatmap_test',
  'test/utils/host_progress_popup_test',
  'test/utils/hosts_test',
  'test/utils/http_client_test',
  'test/utils/misc_test',
  'test/utils/number_utils_test',
  'test/utils/polling_test',
  'test/utils/validator_test',
  'test/utils/config_test',
  'test/utils/string_utils_test',
  'test/utils/helper_test',
  'test/utils/object_utils_test',
  'test/utils/ui_effects_test',
  'test/utils/updater_test',
  'test/utils/configs/database_test',
  'test/utils/configs/config_initializer_test',
  'test/utils/configs/modification_handlers/modification_handler_test',
  'test/utils/configs/modification_handlers/misc_test',
  'test/utils/load_timer_test',
  'test/utils/configs/theme/theme_test',
  'test/views/common/breadcrumbs_view_test',
  'test/views/common/chart/linear_time_test',
  'test/views/common/configs/widgets/combo_config_widget_view_test',
  'test/views/common/configs/widgets/config_widget_view_test',
  'test/views/common/configs/widgets/list_config_widget_view_test',
  'test/views/common/configs/widgets/slider_config_widget_view_test',
  'test/views/common/configs/widgets/toggle_config_widget_view_test',
  'test/views/common/helpers/format_word_break_view_test',
  'test/views/common/ajax_default_error_popup_body_test',
  'test/views/common/filter_combo_cleanable_test',
  'test/views/common/filter_view_test',
  'test/views/common/pagination_view_test',
  'test/views/common/table_view_test',
  'test/views/common/quick_link_view_test',
  'test/views/common/rolling_restart_view_test',
  'test/views/common/modal_popup_test',
  'test/views/common/sort_view_test',
  'test/views/common/progress_bar_view_test',
  'test/views/common/select_custom_date_view_test',
  'test/views/common/widget/graph_widget_view_test',
  'test/views/common/widget/number_widget_view_test',
  'test/views/common/widget/gauge_widget_view_test',
  'test/views/common/widget/template_widget_view_test',
  'test/views/common/widget/heatmap_widget_view_test',
  'test/views/common/modal_popups/cluster_check_popup_test',
  'test/views/common/modal_popups/edit_dashboard_widget_popup_test',
  'test/views/common/modal_popups/hosts_table_list_popup_test',
  'test/views/common/modal_popups/dependent_configs_list_popup_test',
  'test/views/main/admin_test',
  'test/views/main/dashboard_test',
  'test/views/main/menu_test',
  'test/views/main/host_test',
  'test/views/main/views_view_test',
  'test/views/main/alert_definitions_view_test',
  'test/views/main/alerts/manage_alert_groups_view_test',
  'test/views/main/alerts/manage_alert_notifications_view_test',
  'test/views/main/alerts/definition_details_view_test',
  'test/views/main/alerts/definition_configs_view_test',
  'test/views/main/alerts/add_alert_definition/step1_view_test',
  'test/views/main/alerts/add_alert_definition/step3_view_test',
  'test/views/main/alerts/manage_alert_groups/select_definitions_popup_body_view_test',
  'test/views/main/admin/stack_upgrade/upgrade_version_box_view_test',
  'test/views/main/admin/stack_upgrade/upgrade_version_column_view_test',
  'test/views/main/admin/stack_upgrade/upgrade_group_view_test',
  'test/views/main/admin/stack_upgrade/upgrade_task_view_test',
  'test/views/main/admin/stack_upgrade/upgrade_wizard_view_test',
  'test/views/main/admin/stack_upgrade/upgrade_history_view_test',
  'test/views/main/admin/stack_upgrade/upgrade_history_details_view_test',
  'test/views/main/admin/stack_upgrade/version_view_test',
  'test/views/main/admin/stack_upgrade/services_view_test',
  'test/views/main/admin/stack_upgrade/menu_view_test',
  'test/views/main/admin/stack_upgrade/failed_hosts_modal_view_test',
  'test/views/main/admin/service_auto_start/component_auto_start_test',
  'test/views/main/admin/service_auto_start_test',
  'test/views/main/dashboard/config_history_view_test',
  'test/views/main/dashboard/widget_test',
  'test/views/main/dashboard/widgets_test',
  'test/views/main/dashboard/widgets/text_widget_test',
  'test/views/main/dashboard/widgets/text_widget_single_threshold_test',
  'test/views/main/dashboard/widgets/uptime_text_widget_test',
  'test/views/main/dashboard/widgets/node_managers_live_test',
  'test/views/main/dashboard/widgets/datanode_live_test',
  'test/views/main/dashboard/widgets/hawqsegment_live_test',
  'test/views/main/dashboard/widgets/pxf_live_test',
  'test/views/main/dashboard/widgets/hbase_average_load_test',
  'test/views/main/dashboard/widgets/hbase_regions_in_transition_test',
  'test/views/main/dashboard/widgets/namenode_rpc_test',
  'test/views/main/dashboard/widgets/hbase_master_uptime_test',
  'test/views/main/dashboard/widgets/namenode_uptime_test',
  'test/views/main/dashboard/widgets/resource_manager_uptime_test',
  'test/views/main/dashboard/widgets/links_widget_test',
  'test/views/main/dashboard/widgets/pie_chart_widget_test',
  'test/views/main/dashboard/widgets/namenode_cpu_test',
  'test/views/main/dashboard/widgets/cluster_metrics_widget_test',
  'test/views/main/host/details_test',
  'test/views/main/host/summary_test',
  'test/views/main/host/menu_test',
  'test/views/main/host/stack_versions_view_test',
  'test/views/main/host/host_alerts_view_test',
  'test/views/main/host/combo_search_box_test',
  'test/views/main/host/config_service_test',
  'test/views/main/host/add_view_test',
  'test/views/main/host/logs_view_test',
  'test/views/main/host/hosts_table_menu_view_test',
  'test/views/main/host/log_metrics_test',
  'test/views/main/host/config_service_menu_test',
  'test/views/main/host/details/host_component_view_test',
  'test/views/main/host/details/host_component_views/decommissionable_test',
  'test/views/main/host/details/host_component_views/datanode_view_test',
  'test/views/main/host/details/host_component_views/nodemanager_view_test',
  'test/views/main/host/details/host_component_views/regionserver_view_test',
  'test/views/main/host/details/host_component_views/tasktracker_view_test',
  'test/views/main/host/metrics/disk_test',
  'test/views/main/charts/heatmap_test',
  'test/views/main/charts/heatmap/heatmap_host_test',
  'test/views/main/service/item_test',
  'test/views/main/service/manage_config_groups_view_test',
  'test/views/main/service/reassign_view_test',
  'test/views/main/service/reconfigure_test',
  'test/views/main/service/service_test',
  'test/views/main/service/info/config_test',
  'test/views/main/service/info/summary_test',
  'test/views/main/service/info/menu_test',
  'test/views/main/service/info/component_list_view_test',
  'test/views/main/service/info/metrics/ambari_metrics/regionserver_base_test',
  'test/views/main/service/info/metrics/flume/flume_agent_metrics_section_test',
  'test/views/main/service/services/hdfs_test',
  'test/views/main/service/services/hbase_test',
  'test/views/main/service/services/ranger_test',
  'test/views/main/service/services/storm_test',
  'test/views/main/service/services/yarn_test',
  'test/views/main/service/services/hive_test',
  'test/views/main/service/services/mapreduce2_test',
  'test/views/main/service/services/zookeeper_test',
  'test/views/main/service/services/flume_test',
  'test/views/main/service/widgets/create/expression_view_test',
  'test/views/main/service/widgets/create/wizard_view_test',
  'test/views/main/service/widgets/create/step3_view_test',
  'test/views/main/service/widgets/create/step2_view_test',
  'test/views/main/service/widgets/create/step1_view_test',
  'test/views/main/admin/highAvailability/nameNode/step1_view_test',
  'test/views/main/admin/highAvailability/nameNode/step3_view_test',
  'test/views/main/admin/highAvailability/nameNode/step4_view_test',
  'test/views/main/admin/highAvailability/nameNode/step6_view_test',
  'test/views/main/admin/highAvailability/nameNode/step8_view_test',
  'test/views/main/admin/highAvailability/resourceManager/step3_view_test',
  'test/views/main/admin/highAvailability/resourceManager/wizard_view_test',
  'test/views/main/admin/highAvailability/nameNode/wizard_view_test',
  'test/views/main/admin/highAvailability/progress_view_test',
  'test/views/common/host_progress_popup_body_view_test',
  'test/views/common/configs/config_history_flow_test',
  'test/views/common/configs/overriddenProperty_view_test',
  'test/views/common/configs/service_config_view_test',
  'test/views/common/configs/service_config_container_view_test',
  'test/views/common/configs/service_configs_by_category_view_test',
  'test/views/common/configs/custom_category_views/notification_configs_view_test',
  'test/views/common/controls_view_test',
  'test/views/common/configs/widgets/time_interval_spinner_view_test',
  'test/views/common/form/spinner_input_view_test',
  'test/views/common/form/manage_kdc_credentials_form_test',
  'test/views/common/log_file_search_view_test',
  'test/views/wizard/step3/hostLogPopupBody_view_test',
  'test/views/wizard/step3/hostWarningPopupBody_view_test',
  'test/views/wizard/step3/hostWarningPopupFooter_view_test',
  'test/views/wizard/step0_view_test',
  'test/views/wizard/step1_view_test',
  'test/views/wizard/step2_view_test',
  'test/views/wizard/step3_view_test',
  'test/views/wizard/step4_view_test',
  'test/views/wizard/step5_view_test',
  'test/views/wizard/step6_view_test',
  'test/views/wizard/step7_view_test',
  'test/views/wizard/step8_view_test',
  'test/views/wizard/step9_view_test',
  'test/views/wizard/step9/hostLogPopupBody_view_test',
  'test/views/wizard/step7/assign_master_view_test',
  'test/views/wizard/step10_view_test',
  'test/views/application_test',
  'test/views/installer_test',
  'test/views/login_test',
  'test/models/service/flume_test',
  'test/models/service/hdfs_test',
  'test/models/service/yarn_test',
  'test/models/alerts/alert_config_test',
  'test/models/alerts/alert_definition_test',
  'test/models/alerts/alert_group_test',
  'test/models/alerts/alert_instance_test',
  'test/models/alerts/alert_notification_test',
  'test/models/authentication_test',
  'test/models/client_component_test',
  'test/models/cluster_states_test',
  'test/models/cluster_test',
  'test/models/form_test',
  'test/models/host_test',
  'test/models/host_component_test',
  'test/models/hosts_test',
  'test/models/master_component_test',
  'test/models/operating_system_test',
  'test/models/repository_test',
  'test/models/root_service_test',
  'test/models/stack_service_component_test',
  'test/models/service_test',
  'test/models/slave_component_test',
  'test/models/stack_test',
  'test/models/stack_service_test',
  'test/models/user_test',
  'test/models/view_instance_test',
  'test/models/widget_test',
  'test/models/widget_property_test',
  'test/models/host_stack_version_test',
  'test/models/upgrade_entity_test',
  'test/models/finished_upgrade_entity_test',
  'test/models/configs/service_config_version_test',
  'test/models/configs/config_group_test',
  'test/models/configs/stack_config_property_test',
  'test/models/configs/objects/service_config_test',
  'test/models/configs/objects/service_config_category_test',
  'test/models/configs/objects/service_config_property_test',
  'test/models/configs/theme/section_test',
  'test/models/configs/theme/sub_section_test',
  'test/models/configs/theme/sub_section_tab_test',
  'test/models/configs/theme/tab_test',
  'test/models/stack_version/repository_version_test',
  'test/models/stack_version/service_simple_test',
  'test/models/stack_version/version_test',
  'test/routes/views_test',
  //contains test with fake timers that affect Date
  'test/utils/lazy_loading_test',
  'test/views/main/service/menu_test'
];

var ajaxSendMock = {
  complete: Em.K,
  success: Em.K,
  then: Em.K,
  promise: Em.K,
  done: Em.clb,
  error: Em.K,
  retry: function () {
    return {
      then: Em.K,
      complete: Em.K
    }
  },
  fail: Em.K,
  always: Em.clb
};

// don't poll anything while test are running
App.bgOperationsUpdateInterval = 3600000;
App.componentsUpdateInterval = 3600000;
App.contentUpdateInterval = 3600000;
App.hostStatusCountersUpdateInterval = 3600000;
App.alertDefinitionsUpdateInterval = 3600000;
App.alertInstancesUpdateInterval = 3600000;
App.alertGroupsUpdateInterval = 3600000;

App.initialize();
describe('Ambari Web Unit tests', function() {

  beforeEach(function () {
    App.set('testMode', false); // don't even try to write tests for testMode = true
    sinon.stub($, 'ajax', Em.K);
    sinon.stub(App.ajax, 'send', function () {
      return ajaxSendMock;
    });
    sinon.stub(App.updater, 'run', Em.K);
    sinon.stub(App.updater, 'immediateRun', Em.K);
  });

  afterEach(function () {
    App.ajax.send.restore();
    $.ajax.restore();
    App.updater.run.restore();
    App.updater.immediateRun.restore();
  });

  files.forEach(function (file) {
    describe(file, function() {
      require(file);
    });
  });

});
