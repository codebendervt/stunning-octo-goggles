import { ApplicationInsights } from '@microsoft/applicationinsights-web'

const appInsights =  new ApplicationInsights({ config: {
  connectionString: 'InstrumentationKey=06067667-9f46-4e60-8d59-e092cb8f3e73;IngestionEndpoint=https://southafricanorth-0.in.applicationinsights.azure.com/'
  /* ...Other Configuration Options... */
} });

appInsights.loadAppInsights();
appInsights.trackPageView();

export default appInsights;