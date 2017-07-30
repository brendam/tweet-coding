/*
Copyright 2017 Cameron Moon & Brenda Moon

Licensed under the Apache License, Version 2.0 (the "License"):
http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
*/

import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
