// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/svelte/internal/index.mjs":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add_attribute = add_attribute;
exports.add_classes = add_classes;
exports.add_flush_callback = add_flush_callback;
exports.add_location = add_location;
exports.add_render_callback = add_render_callback;
exports.add_resize_listener = add_resize_listener;
exports.add_transform = add_transform;
exports.afterUpdate = afterUpdate;
exports.append = append;
exports.append_dev = append_dev;
exports.assign = assign;
exports.attr = attr;
exports.attr_dev = attr_dev;
exports.beforeUpdate = beforeUpdate;
exports.bind = bind;
exports.blank_object = blank_object;
exports.bubble = bubble;
exports.check_outros = check_outros;
exports.children = children;
exports.claim_component = claim_component;
exports.claim_element = claim_element;
exports.claim_space = claim_space;
exports.claim_text = claim_text;
exports.clear_loops = clear_loops;
exports.component_subscribe = component_subscribe;
exports.createEventDispatcher = createEventDispatcher;
exports.create_animation = create_animation;
exports.create_bidirectional_transition = create_bidirectional_transition;
exports.create_component = create_component;
exports.create_in_transition = create_in_transition;
exports.create_out_transition = create_out_transition;
exports.create_slot = create_slot;
exports.create_ssr_component = create_ssr_component;
exports.custom_event = custom_event;
exports.dataset_dev = dataset_dev;
exports.debug = debug;
exports.destroy_block = destroy_block;
exports.destroy_component = destroy_component;
exports.destroy_each = destroy_each;
exports.detach = detach;
exports.detach_after_dev = detach_after_dev;
exports.detach_before_dev = detach_before_dev;
exports.detach_between_dev = detach_between_dev;
exports.detach_dev = detach_dev;
exports.dispatch_dev = dispatch_dev;
exports.each = each;
exports.element = element;
exports.element_is = element_is;
exports.empty = empty;
exports.escape = escape;
exports.exclude_internal_props = exclude_internal_props;
exports.fix_and_destroy_block = fix_and_destroy_block;
exports.fix_and_outro_and_destroy_block = fix_and_outro_and_destroy_block;
exports.fix_position = fix_position;
exports.flush = flush;
exports.getContext = getContext;
exports.get_binding_group_value = get_binding_group_value;
exports.get_current_component = get_current_component;
exports.get_slot_changes = get_slot_changes;
exports.get_slot_context = get_slot_context;
exports.get_spread_object = get_spread_object;
exports.get_spread_update = get_spread_update;
exports.get_store_value = get_store_value;
exports.group_outros = group_outros;
exports.handle_promise = handle_promise;
exports.init = init;
exports.insert = insert;
exports.insert_dev = insert_dev;
exports.is_function = is_function;
exports.is_promise = is_promise;
exports.listen = listen;
exports.listen_dev = listen_dev;
exports.loop = loop;
exports.loop_guard = loop_guard;
exports.measure = measure;
exports.mount_component = mount_component;
exports.noop = noop;
exports.not_equal = not_equal;
exports.null_to_empty = null_to_empty;
exports.object_without_properties = object_without_properties;
exports.onDestroy = onDestroy;
exports.onMount = onMount;
exports.once = once;
exports.outro_and_destroy_block = outro_and_destroy_block;
exports.prevent_default = prevent_default;
exports.prop_dev = prop_dev;
exports.run = run;
exports.run_all = run_all;
exports.safe_not_equal = safe_not_equal;
exports.schedule_update = schedule_update;
exports.select_multiple_value = select_multiple_value;
exports.select_option = select_option;
exports.select_options = select_options;
exports.select_value = select_value;
exports.self = self;
exports.setContext = setContext;
exports.set_attributes = set_attributes;
exports.set_current_component = set_current_component;
exports.set_custom_element_data = set_custom_element_data;
exports.set_data = set_data;
exports.set_data_dev = set_data_dev;
exports.set_input_type = set_input_type;
exports.set_input_value = set_input_value;
exports.set_now = set_now;
exports.set_raf = set_raf;
exports.set_store_value = set_store_value;
exports.set_style = set_style;
exports.set_svg_attributes = set_svg_attributes;
exports.space = space;
exports.spread = spread;
exports.stop_propagation = stop_propagation;
exports.subscribe = subscribe;
exports.svg_element = svg_element;
exports.text = text;
exports.tick = tick;
exports.time_ranges_to_array = time_ranges_to_array;
exports.to_number = to_number;
exports.toggle_class = toggle_class;
exports.transition_in = transition_in;
exports.transition_out = transition_out;
exports.update_keyed_each = update_keyed_each;
exports.validate_component = validate_component;
exports.validate_store = validate_store;
exports.xlink_attr = xlink_attr;
exports.raf = exports.now = exports.missing_component = exports.is_client = exports.invalid_attribute_name_character = exports.intros = exports.identity = exports.has_prop = exports.globals = exports.escaped = exports.dirty_components = exports.current_component = exports.binding_callbacks = exports.SvelteElement = exports.SvelteComponentDev = exports.SvelteComponent = exports.HtmlTag = void 0;

function noop() {}

const identity = x => x;

exports.identity = identity;

function assign(tar, src) {
  // @ts-ignore
  for (const k in src) tar[k] = src[k];

  return tar;
}

function is_promise(value) {
  return value && typeof value === 'object' && typeof value.then === 'function';
}

function add_location(element, file, line, column, char) {
  element.__svelte_meta = {
    loc: {
      file,
      line,
      column,
      char
    }
  };
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}

function not_equal(a, b) {
  return a != a ? b == b : a !== b;
}

function validate_store(store, name) {
  if (!store || typeof store.subscribe !== 'function') {
    throw new Error(`'${name}' is not a store with a 'subscribe' method`);
  }
}

function subscribe(store, callback) {
  const unsub = store.subscribe(callback);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

function get_store_value(store) {
  let value;
  subscribe(store, _ => value = _)();
  return value;
}

function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, fn) {
  return definition[1] ? assign({}, assign(ctx.$$scope.ctx, definition[1](fn ? fn(ctx) : {}))) : ctx.$$scope.ctx;
}

function get_slot_changes(definition, ctx, changed, fn) {
  return definition[1] ? assign({}, assign(ctx.$$scope.changed || {}, definition[1](fn ? fn(changed) : {}))) : ctx.$$scope.changed || {};
}

function exclude_internal_props(props) {
  const result = {};

  for (const k in props) if (k[0] !== '$') result[k] = props[k];

  return result;
}

function once(fn) {
  let ran = false;
  return function (...args) {
    if (ran) return;
    ran = true;
    fn.call(this, ...args);
  };
}

function null_to_empty(value) {
  return value == null ? '' : value;
}

function set_store_value(store, ret, value = ret) {
  store.set(value);
  return ret;
}

const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

exports.has_prop = has_prop;
const is_client = typeof window !== 'undefined';
exports.is_client = is_client;
let now = is_client ? () => window.performance.now() : () => Date.now();
exports.now = now;
let raf = is_client ? cb => requestAnimationFrame(cb) : noop; // used internally for testing

exports.raf = raf;

function set_now(fn) {
  exports.now = now = fn;
}

function set_raf(fn) {
  exports.raf = raf = fn;
}

const tasks = new Set();
let running = false;

function run_tasks() {
  tasks.forEach(task => {
    if (!task[0](now())) {
      tasks.delete(task);
      task[1]();
    }
  });
  running = tasks.size > 0;
  if (running) raf(run_tasks);
}

function clear_loops() {
  // for testing...
  tasks.forEach(task => tasks.delete(task));
  running = false;
}

function loop(fn) {
  let task;

  if (!running) {
    running = true;
    raf(run_tasks);
  }

  return {
    promise: new Promise(fulfil => {
      tasks.add(task = [fn, fulfil]);
    }),

    abort() {
      tasks.delete(task);
    }

  };
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function element_is(name, is) {
  return document.createElement(name, {
    is
  });
}

function object_without_properties(obj, exclude) {
  // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
  const target = {};

  for (const k in obj) {
    if (has_prop(obj, k) // @ts-ignore
    && exclude.indexOf(k) === -1) {
      // @ts-ignore
      target[k] = obj[k];
    }
  }

  return target;
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}

function prevent_default(fn) {
  return function (event) {
    event.preventDefault(); // @ts-ignore

    return fn.call(this, event);
  };
}

function stop_propagation(fn) {
  return function (event) {
    event.stopPropagation(); // @ts-ignore

    return fn.call(this, event);
  };
}

function self(fn) {
  return function (event) {
    // @ts-ignore
    if (event.target === this) fn.call(this, event);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function set_attributes(node, attributes) {
  // @ts-ignore
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}

function set_svg_attributes(node, attributes) {
  for (const key in attributes) {
    attr(node, key, attributes[key]);
  }
}

function set_custom_element_data(node, prop, value) {
  if (prop in node) {
    node[prop] = value;
  } else {
    attr(node, prop, value);
  }
}

function xlink_attr(node, attribute, value) {
  node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function get_binding_group_value(group) {
  const value = [];

  for (let i = 0; i < group.length; i += 1) {
    if (group[i].checked) value.push(group[i].__value);
  }

  return value;
}

function to_number(value) {
  return value === '' ? undefined : +value;
}

function time_ranges_to_array(ranges) {
  const array = [];

  for (let i = 0; i < ranges.length; i += 1) {
    array.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }

  return array;
}

function children(element) {
  return Array.from(element.childNodes);
}

function claim_element(nodes, name, attributes, svg) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeName === name) {
      for (let j = 0; j < node.attributes.length; j += 1) {
        const attribute = node.attributes[j];
        if (!attributes[attribute.name]) node.removeAttribute(attribute.name);
      }

      return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
    }
  }

  return svg ? svg_element(name) : element(name);
}

function claim_text(nodes, data) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeType === 3) {
      node.data = '' + data;
      return nodes.splice(i, 1)[0];
    }
  }

  return text(data);
}

function claim_space(nodes) {
  return claim_text(nodes, ' ');
}

function set_data(text, data) {
  data = '' + data;
  if (text.data !== data) text.data = data;
}

function set_input_value(input, value) {
  if (value != null || input.value) {
    input.value = value;
  }
}

function set_input_type(input, type) {
  try {
    input.type = type;
  } catch (e) {// do nothing
  }
}

function set_style(node, key, value, important) {
  node.style.setProperty(key, value, important ? 'important' : '');
}

function select_option(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];

    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
}

function select_options(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];
    option.selected = ~value.indexOf(option.__value);
  }
}

function select_value(select) {
  const selected_option = select.querySelector(':checked') || select.options[0];
  return selected_option && selected_option.__value;
}

function select_multiple_value(select) {
  return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}

function add_resize_listener(element, fn) {
  if (getComputedStyle(element).position === 'static') {
    element.style.position = 'relative';
  }

  const object = document.createElement('object');
  object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
  object.type = 'text/html';
  object.tabIndex = -1;
  let win;

  object.onload = () => {
    win = object.contentDocument.defaultView;
    win.addEventListener('resize', fn);
  };

  if (/Trident/.test(navigator.userAgent)) {
    element.appendChild(object);
    object.data = 'about:blank';
  } else {
    object.data = 'about:blank';
    element.appendChild(object);
  }

  return {
    cancel: () => {
      win && win.removeEventListener && win.removeEventListener('resize', fn);
      element.removeChild(object);
    }
  };
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  const e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, false, false, detail);
  return e;
}

class HtmlTag {
  constructor(html, anchor = null) {
    this.e = element('div');
    this.a = anchor;
    this.u(html);
  }

  m(target, anchor = null) {
    for (let i = 0; i < this.n.length; i += 1) {
      insert(target, this.n[i], anchor);
    }

    this.t = target;
  }

  u(html) {
    this.e.innerHTML = html;
    this.n = Array.from(this.e.childNodes);
  }

  p(html) {
    this.d();
    this.u(html);
    this.m(this.t, this.a);
  }

  d() {
    this.n.forEach(detach);
  }

}

exports.HtmlTag = HtmlTag;
let stylesheet;
let active = 0;
let current_rules = {}; // https://github.com/darkskyapp/string-hash/blob/master/index.js

function hash(str) {
  let hash = 5381;
  let i = str.length;

  while (i--) hash = (hash << 5) - hash ^ str.charCodeAt(i);

  return hash >>> 0;
}

function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
  const step = 16.666 / duration;
  let keyframes = '{\n';

  for (let p = 0; p <= 1; p += step) {
    const t = a + (b - a) * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
  }

  const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
  const name = `__svelte_${hash(rule)}_${uid}`;

  if (!current_rules[name]) {
    if (!stylesheet) {
      const style = element('style');
      document.head.appendChild(style);
      stylesheet = style.sheet;
    }

    current_rules[name] = true;
    stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
  }

  const animation = node.style.animation || '';
  node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
  active += 1;
  return name;
}

function delete_rule(node, name) {
  node.style.animation = (node.style.animation || '').split(', ').filter(name ? anim => anim.indexOf(name) < 0 // remove specific animation
  : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
  ).join(', ');
  if (name && ! --active) clear_rules();
}

function clear_rules() {
  raf(() => {
    if (active) return;
    let i = stylesheet.cssRules.length;

    while (i--) stylesheet.deleteRule(i);

    current_rules = {};
  });
}

function create_animation(node, from, fn, params) {
  if (!from) return noop;
  const to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;
  const {
    delay = 0,
    duration = 300,
    easing = identity,
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay,
    // @ts-ignore todo:
    end = start_time + duration,
    tick = noop,
    css
  } = fn(node, {
    from,
    to
  }, params);
  let running = true;
  let started = false;
  let name;

  function start() {
    if (css) {
      name = create_rule(node, 0, 1, duration, delay, easing, css);
    }

    if (!delay) {
      started = true;
    }
  }

  function stop() {
    if (css) delete_rule(node, name);
    running = false;
  }

  loop(now => {
    if (!started && now >= start_time) {
      started = true;
    }

    if (started && now >= end) {
      tick(1, 0);
      stop();
    }

    if (!running) {
      return false;
    }

    if (started) {
      const p = now - start_time;
      const t = 0 + 1 * easing(p / duration);
      tick(t, 1 - t);
    }

    return true;
  });
  start();
  tick(0, 1);
  return stop;
}

function fix_position(node) {
  const style = getComputedStyle(node);

  if (style.position !== 'absolute' && style.position !== 'fixed') {
    const {
      width,
      height
    } = style;
    const a = node.getBoundingClientRect();
    node.style.position = 'absolute';
    node.style.width = width;
    node.style.height = height;
    add_transform(node, a);
  }
}

function add_transform(node, a) {
  const b = node.getBoundingClientRect();

  if (a.left !== b.left || a.top !== b.top) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
  }
}

let current_component;
exports.current_component = current_component;

function set_current_component(component) {
  exports.current_component = current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error(`Function called outside component initialization`);
  return current_component;
}

function beforeUpdate(fn) {
  get_current_component().$$.before_update.push(fn);
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}

function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];

    if (callbacks) {
      // TODO are there situations where events could be dispatched
      // in a server (non-DOM) environment?
      const event = custom_event(type, detail);
      callbacks.slice().forEach(fn => {
        fn.call(component, event);
      });
    }
  };
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}

function getContext(key) {
  return get_current_component().$$.context.get(key);
} // TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism


function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];

  if (callbacks) {
    callbacks.slice().forEach(fn => fn(event));
  }
}

const dirty_components = [];
exports.dirty_components = dirty_components;
const intros = {
  enabled: false
};
exports.intros = intros;
const binding_callbacks = [];
exports.binding_callbacks = binding_callbacks;
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function tick() {
  schedule_update();
  return resolved_promise;
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}

function flush() {
  const seen_callbacks = new Set();

  do {
    // first, call beforeUpdate functions
    // and update components
    while (dirty_components.length) {
      const component = dirty_components.shift();
      set_current_component(component);
      update(component.$$);
    }

    while (binding_callbacks.length) binding_callbacks.pop()(); // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];

      if (!seen_callbacks.has(callback)) {
        callback(); // ...so guard against infinite loops

        seen_callbacks.add(callback);
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update($$.dirty);
    run_all($$.before_update);
    $$.fragment && $$.fragment.p($$.dirty, $$.ctx);
    $$.dirty = null;
    $$.after_update.forEach(add_render_callback);
  }
}

let promise;

function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }

  return promise;
}

function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}

const outroing = new Set();
let outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

const null_transition = {
  duration: 0
};

function create_in_transition(node, fn, params) {
  let config = fn(node, params);
  let running = false;
  let animation_name;
  let task;
  let uid = 0;

  function cleanup() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick(0, 1);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    if (task) task.abort();
    running = true;
    add_render_callback(() => dispatch(node, true, 'start'));
    task = loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(1, 0);
          dispatch(node, true, 'end');
          cleanup();
          return running = false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(t, 1 - t);
        }
      }

      return running;
    });
  }

  let started = false;
  return {
    start() {
      if (started) return;
      delete_rule(node);

      if (is_function(config)) {
        config = config();
        wait().then(go);
      } else {
        go();
      }
    },

    invalidate() {
      started = false;
    },

    end() {
      if (running) {
        cleanup();
        running = false;
      }
    }

  };
}

function create_out_transition(node, fn, params) {
  let config = fn(node, params);
  let running = true;
  let animation_name;
  const group = outros;
  group.r += 1;

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    add_render_callback(() => dispatch(node, false, 'start'));
    loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(0, 1);
          dispatch(node, false, 'end');

          if (! --group.r) {
            // this will result in `end()` being called,
            // so we don't need to clean up here
            run_all(group.c);
          }

          return false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(1 - t, t);
        }
      }

      return running;
    });
  }

  if (is_function(config)) {
    wait().then(() => {
      // @ts-ignore
      config = config();
      go();
    });
  } else {
    go();
  }

  return {
    end(reset) {
      if (reset && config.tick) {
        config.tick(1, 0);
      }

      if (running) {
        if (animation_name) delete_rule(node, animation_name);
        running = false;
      }
    }

  };
}

function create_bidirectional_transition(node, fn, params, intro) {
  let config = fn(node, params);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;

  function clear_animation() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function init(program, duration) {
    const d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }

  function go(b) {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    const program = {
      start: now() + delay,
      b
    };

    if (!b) {
      // @ts-ignore todo: improve typings
      program.group = outros;
      outros.r += 1;
    }

    if (running_program) {
      pending_program = program;
    } else {
      // if this is an intro, and there's a delay, we need to do
      // an initial tick and/or apply CSS animation immediately
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }

      if (b) tick(0, 1);
      running_program = init(program, duration);
      add_render_callback(() => dispatch(node, b, 'start'));
      loop(now => {
        if (pending_program && now > pending_program.start) {
          running_program = init(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, 'start');

          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }

        if (running_program) {
          if (now >= running_program.end) {
            tick(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, 'end');

            if (!pending_program) {
              // we're done
              if (running_program.b) {
                // intro — we can tidy up immediately
                clear_animation();
              } else {
                // outro — needs to be coordinated
                if (! --running_program.group.r) run_all(running_program.group.c);
              }
            }

            running_program = null;
          } else if (now >= running_program.start) {
            const p = now - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick(t, 1 - t);
          }
        }

        return !!(running_program || pending_program);
      });
    }
  }

  return {
    run(b) {
      if (is_function(config)) {
        wait().then(() => {
          // @ts-ignore
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },

    end() {
      clear_animation();
      running_program = pending_program = null;
    }

  };
}

function handle_promise(promise, info) {
  const token = info.token = {};

  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = key && {
      [key]: value
    };
    const child_ctx = assign(assign({}, info.ctx), info.resolved);
    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;

    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block, i) => {
          if (i !== index && block) {
            group_outros();
            transition_out(block, 1, 1, () => {
              info.blocks[i] = null;
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }

      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }

    info.block = block;
    if (info.blocks) info.blocks[index] = block;

    if (needs_flush) {
      flush();
    }
  }

  if (is_promise(promise)) {
    const current_component = get_current_component();
    promise.then(value => {
      set_current_component(current_component);
      update(info.then, 1, info.value, value);
      set_current_component(null);
    }, error => {
      set_current_component(current_component);
      update(info.catch, 2, info.error, error);
      set_current_component(null);
    }); // if we previously had a then/catch block, destroy it

    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }

    info.resolved = {
      [info.value]: promise
    };
  }
}

const globals = typeof window !== 'undefined' ? window : global;
exports.globals = globals;

function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}

function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, () => {
    lookup.delete(block.key);
  });
}

function fix_and_destroy_block(block, lookup) {
  block.f();
  destroy_block(block, lookup);
}

function fix_and_outro_and_destroy_block(block, lookup) {
  block.f();
  outro_and_destroy_block(block, lookup);
}

function update_keyed_each(old_blocks, changed, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
  let o = old_blocks.length;
  let n = list.length;
  let i = o;
  const old_indexes = {};

  while (i--) old_indexes[old_blocks[i].key] = i;

  const new_blocks = [];
  const new_lookup = new Map();
  const deltas = new Map();
  i = n;

  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key = get_key(child_ctx);
    let block = lookup.get(key);

    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(changed, child_ctx);
    }

    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }

  const will_move = new Set();
  const did_move = new Set();

  function insert(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }

  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }

  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
  }

  while (n) insert(new_blocks[n - 1]);

  return new_blocks;
}

function measure(blocks) {
  const rects = {};
  let i = blocks.length;

  while (i--) rects[blocks[i].key] = blocks[i].node.getBoundingClientRect();

  return rects;
}

function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = {
    $$scope: 1
  };
  let i = levels.length;

  while (i--) {
    const o = levels[i];
    const n = updates[i];

    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }

  for (const key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }

  return update;
}

function get_spread_object(spread_props) {
  return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
} // source: https://html.spec.whatwg.org/multipage/indices.html


const boolean_attributes = new Set(['allowfullscreen', 'allowpaymentrequest', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'ismap', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected']);
const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u; // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

exports.invalid_attribute_name_character = invalid_attribute_name_character;

function spread(args, classes_to_add) {
  const attributes = Object.assign({}, ...args);

  if (classes_to_add) {
    if (attributes.class == null) {
      attributes.class = classes_to_add;
    } else {
      attributes.class += ' ' + classes_to_add;
    }
  }

  let str = '';
  Object.keys(attributes).forEach(name => {
    if (invalid_attribute_name_character.test(name)) return;
    const value = attributes[name];
    if (value === true) str += " " + name;else if (boolean_attributes.has(name.toLowerCase())) {
      if (value) str += " " + name;
    } else if (value != null) {
      str += " " + name + "=" + JSON.stringify(String(value).replace(/"/g, '&#34;').replace(/'/g, '&#39;'));
    }
  });
  return str;
}

const escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
exports.escaped = escaped;

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, fn) {
  let str = '';

  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }

  return str;
}

const missing_component = {
  $$render: () => ''
};
exports.missing_component = missing_component;

function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }

  return component;
}

function debug(file, line, column, values) {
  console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console

  console.log(values); // eslint-disable-line no-console

  return '';
}

let on_destroy;

function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : []),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({
      $$
    });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }

  return {
    render: (props = {}, options = {}) => {
      on_destroy = [];
      const result = {
        head: '',
        css: new Set()
      };
      const html = $$render(result, props, {}, options);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map(css => css.code).join('\n'),
          map: null // TODO

        },
        head: result.head
      };
    },
    $$render
  };
}

function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value) return '';
  return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

function add_classes(classes) {
  return classes ? ` class="${classes}"` : ``;
}

function bind(component, name, callback) {
  if (has_prop(component.$$.props, name)) {
    name = component.$$.props[name] || name;
    component.$$.bound[name] = callback;
    callback(component.$$.ctx[name]);
  }
}

function create_component(block) {
  block && block.c();
}

function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}

function mount_component(component, target, anchor) {
  const {
    fragment,
    on_mount,
    on_destroy,
    after_update
  } = component.$$;
  fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

  add_render_callback(() => {
    const new_on_destroy = on_mount.map(run).filter(is_function);

    if (on_destroy) {
      on_destroy.push(...new_on_destroy);
    } else {
      // Edge case - component was destroyed immediately,
      // most likely as a result of a binding initialising
      run_all(new_on_destroy);
    }

    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  const $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = {};
  }
}

function make_dirty(component, key) {
  if (!component.$$.dirty) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty = blank_object();
  }

  component.$$.dirty[key] = true;
}

function init(component, options, instance, create_fragment, not_equal, props) {
  const parent_component = current_component;
  set_current_component(component);
  const prop_values = options.props || {};
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    // everything else
    callbacks: blank_object(),
    dirty: null
  };
  let ready = false;
  $$.ctx = instance ? instance(component, prop_values, (key, ret, value = ret) => {
    if ($$.ctx && not_equal($$.ctx[key], $$.ctx[key] = value)) {
      if ($$.bound[key]) $$.bound[key](value);
      if (ready) make_dirty(component, key);
    }

    return ret;
  }) : prop_values;
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.l(children(options.target));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    flush();
  }

  set_current_component(parent_component);
}

let SvelteElement;
exports.SvelteElement = SvelteElement;

if (typeof HTMLElement === 'function') {
  exports.SvelteElement = SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });
    }

    connectedCallback() {
      // @ts-ignore todo: improve typings
      for (const key in this.$$.slotted) {
        // @ts-ignore todo: improve typings
        this.appendChild(this.$$.slotted[key]);
      }
    }

    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }

    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }

    $on(type, callback) {
      // TODO should this delegate to addEventListener?
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }

    $set() {// overridden by instance, if it has props
    }

  };
}

class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }

  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }

  $set() {// overridden by instance, if it has props
  }

}

exports.SvelteComponent = SvelteComponent;

function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, detail));
}

function append_dev(target, node) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node
  });
  append(target, node);
}

function insert_dev(target, node, anchor) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node,
    anchor
  });
  insert(target, node, anchor);
}

function detach_dev(node) {
  dispatch_dev("SvelteDOMRemove", {
    node
  });
  detach(node);
}

function detach_between_dev(before, after) {
  while (before.nextSibling && before.nextSibling !== after) {
    detach_dev(before.nextSibling);
  }
}

function detach_before_dev(after) {
  while (after.previousSibling) {
    detach_dev(after.previousSibling);
  }
}

function detach_after_dev(before) {
  while (before.nextSibling) {
    detach_dev(before.nextSibling);
  }
}

function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default) modifiers.push('preventDefault');
  if (has_stop_propagation) modifiers.push('stopPropagation');
  dispatch_dev("SvelteDOMAddEventListener", {
    node,
    event,
    handler,
    modifiers
  });
  const dispose = listen(node, event, handler, options);
  return () => {
    dispatch_dev("SvelteDOMRemoveEventListener", {
      node,
      event,
      handler,
      modifiers
    });
    dispose();
  };
}

function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", {
    node,
    attribute
  });else dispatch_dev("SvelteDOMSetAttribute", {
    node,
    attribute,
    value
  });
}

function prop_dev(node, property, value) {
  node[property] = value;
  dispatch_dev("SvelteDOMSetProperty", {
    node,
    property,
    value
  });
}

function dataset_dev(node, property, value) {
  node.dataset[property] = value;
  dispatch_dev("SvelteDOMSetDataset", {
    node,
    property,
    value
  });
}

function set_data_dev(text, data) {
  data = '' + data;
  if (text.data === data) return;
  dispatch_dev("SvelteDOMSetData", {
    node: text,
    data
  });
  text.data = data;
}

class SvelteComponentDev extends SvelteComponent {
  constructor(options) {
    if (!options || !options.target && !options.$$inline) {
      throw new Error(`'target' is a required option`);
    }

    super();
  }

  $destroy() {
    super.$destroy();

    this.$destroy = () => {
      console.warn(`Component was already destroyed`); // eslint-disable-line no-console
    };
  }

}

exports.SvelteComponentDev = SvelteComponentDev;

function loop_guard(timeout) {
  const start = Date.now();
  return () => {
    if (Date.now() - start > timeout) {
      throw new Error(`Infinite loop detected`);
    }
  };
}
},{}],"../node_modules/svelte/easing/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backIn = backIn;
exports.backInOut = backInOut;
exports.backOut = backOut;
exports.bounceIn = bounceIn;
exports.bounceInOut = bounceInOut;
exports.bounceOut = bounceOut;
exports.circIn = circIn;
exports.circInOut = circInOut;
exports.circOut = circOut;
exports.cubicIn = cubicIn;
exports.cubicInOut = cubicInOut;
exports.cubicOut = cubicOut;
exports.elasticIn = elasticIn;
exports.elasticInOut = elasticInOut;
exports.elasticOut = elasticOut;
exports.expoIn = expoIn;
exports.expoInOut = expoInOut;
exports.expoOut = expoOut;
exports.quadIn = quadIn;
exports.quadInOut = quadInOut;
exports.quadOut = quadOut;
exports.quartIn = quartIn;
exports.quartInOut = quartInOut;
exports.quartOut = quartOut;
exports.quintIn = quintIn;
exports.quintInOut = quintInOut;
exports.quintOut = quintOut;
exports.sineIn = sineIn;
exports.sineInOut = sineInOut;
exports.sineOut = sineOut;
Object.defineProperty(exports, "linear", {
  enumerable: true,
  get: function () {
    return _internal.identity;
  }
});

var _internal = require("../internal");

/*
Adapted from https://github.com/mattdesl
Distributed under MIT License https://github.com/mattdesl/eases/blob/master/LICENSE.md
*/
function backInOut(t) {
  const s = 1.70158 * 1.525;
  if ((t *= 2) < 1) return 0.5 * (t * t * ((s + 1) * t - s));
  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
}

function backIn(t) {
  const s = 1.70158;
  return t * t * ((s + 1) * t - s);
}

function backOut(t) {
  const s = 1.70158;
  return --t * t * ((s + 1) * t + s) + 1;
}

function bounceOut(t) {
  const a = 4.0 / 11.0;
  const b = 8.0 / 11.0;
  const c = 9.0 / 10.0;
  const ca = 4356.0 / 361.0;
  const cb = 35442.0 / 1805.0;
  const cc = 16061.0 / 1805.0;
  const t2 = t * t;
  return t < a ? 7.5625 * t2 : t < b ? 9.075 * t2 - 9.9 * t + 3.4 : t < c ? ca * t2 - cb * t + cc : 10.8 * t * t - 20.52 * t + 10.72;
}

function bounceInOut(t) {
  return t < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0)) : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5;
}

function bounceIn(t) {
  return 1.0 - bounceOut(1.0 - t);
}

function circInOut(t) {
  if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}

function circIn(t) {
  return 1.0 - Math.sqrt(1.0 - t * t);
}

function circOut(t) {
  return Math.sqrt(1 - --t * t);
}

function cubicInOut(t) {
  return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
}

function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  const f = t - 1.0;
  return f * f * f + 1.0;
}

function elasticInOut(t) {
  return t < 0.5 ? 0.5 * Math.sin(+13.0 * Math.PI / 2 * 2.0 * t) * Math.pow(2.0, 10.0 * (2.0 * t - 1.0)) : 0.5 * Math.sin(-13.0 * Math.PI / 2 * (2.0 * t - 1.0 + 1.0)) * Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0;
}

function elasticIn(t) {
  return Math.sin(13.0 * t * Math.PI / 2) * Math.pow(2.0, 10.0 * (t - 1.0));
}

function elasticOut(t) {
  return Math.sin(-13.0 * (t + 1.0) * Math.PI / 2) * Math.pow(2.0, -10.0 * t) + 1.0;
}

function expoInOut(t) {
  return t === 0.0 || t === 1.0 ? t : t < 0.5 ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0) : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
}

function expoIn(t) {
  return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
}

function expoOut(t) {
  return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
}

function quadInOut(t) {
  t /= 0.5;
  if (t < 1) return 0.5 * t * t;
  t--;
  return -0.5 * (t * (t - 2) - 1);
}

function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return -t * (t - 2.0);
}

function quartInOut(t) {
  return t < 0.5 ? +8.0 * Math.pow(t, 4.0) : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0;
}

function quartIn(t) {
  return Math.pow(t, 4.0);
}

function quartOut(t) {
  return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
}

function quintInOut(t) {
  if ((t *= 2) < 1) return 0.5 * t * t * t * t * t;
  return 0.5 * ((t -= 2) * t * t * t * t + 2);
}

function quintIn(t) {
  return t * t * t * t * t;
}

function quintOut(t) {
  return --t * t * t * t * t + 1;
}

function sineInOut(t) {
  return -0.5 * (Math.cos(Math.PI * t) - 1);
}

function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14) return 1;else return 1 - v;
}

function sineOut(t) {
  return Math.sin(t * Math.PI / 2);
}
},{"../internal":"../node_modules/svelte/internal/index.mjs"}],"../node_modules/svelte/transition/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blur = blur;
exports.crossfade = crossfade;
exports.draw = draw;
exports.fade = fade;
exports.fly = fly;
exports.scale = scale;
exports.slide = slide;

var _easing = require("../easing");

var _internal = require("../internal");

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function blur(node, {
  delay = 0,
  duration = 400,
  easing = _easing.cubicInOut,
  amount = 5,
  opacity = 0
}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const f = style.filter === 'none' ? '' : style.filter;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (_t, u) => `opacity: ${target_opacity - od * u}; filter: ${f} blur(${u * amount}px);`
  };
}

function fade(node, {
  delay = 0,
  duration = 400,
  easing = _easing.linear
}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: t => `opacity: ${t * o}`
  };
}

function fly(node, {
  delay = 0,
  duration = 400,
  easing = _easing.cubicOut,
  x = 0,
  y = 0,
  opacity = 0
}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === 'none' ? '' : style.transform;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - od * u}`
  };
}

function slide(node, {
  delay = 0,
  duration = 400,
  easing = _easing.cubicOut
}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const height = parseFloat(style.height);
  const padding_top = parseFloat(style.paddingTop);
  const padding_bottom = parseFloat(style.paddingBottom);
  const margin_top = parseFloat(style.marginTop);
  const margin_bottom = parseFloat(style.marginBottom);
  const border_top_width = parseFloat(style.borderTopWidth);
  const border_bottom_width = parseFloat(style.borderBottomWidth);
  return {
    delay,
    duration,
    easing,
    css: t => `overflow: hidden;` + `opacity: ${Math.min(t * 20, 1) * opacity};` + `height: ${t * height}px;` + `padding-top: ${t * padding_top}px;` + `padding-bottom: ${t * padding_bottom}px;` + `margin-top: ${t * margin_top}px;` + `margin-bottom: ${t * margin_bottom}px;` + `border-top-width: ${t * border_top_width}px;` + `border-bottom-width: ${t * border_bottom_width}px;`
  };
}

function scale(node, {
  delay = 0,
  duration = 400,
  easing = _easing.cubicOut,
  start = 0,
  opacity = 0
}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === 'none' ? '' : style.transform;
  const sd = 1 - start;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (_t, u) => `
			transform: ${transform} scale(${1 - sd * u});
			opacity: ${target_opacity - od * u}
		`
  };
}

function draw(node, {
  delay = 0,
  speed,
  duration,
  easing = _easing.cubicInOut
}) {
  const len = node.getTotalLength();

  if (duration === undefined) {
    if (speed === undefined) {
      duration = 800;
    } else {
      duration = len / speed;
    }
  } else if (typeof duration === 'function') {
    duration = duration(len);
  }

  return {
    delay,
    duration,
    easing,
    css: (t, u) => `stroke-dasharray: ${t * len} ${u * len}`
  };
}

function crossfade(_a) {
  var {
    fallback
  } = _a,
      defaults = __rest(_a, ["fallback"]);

  const to_receive = new Map();
  const to_send = new Map();

  function crossfade(from, node, params) {
    const {
      delay = 0,
      duration = d => Math.sqrt(d) * 30,
      easing = _easing.cubicOut
    } = (0, _internal.assign)((0, _internal.assign)({}, defaults), params);
    const to = node.getBoundingClientRect();
    const dx = from.left - to.left;
    const dy = from.top - to.top;
    const dw = from.width / to.width;
    const dh = from.height / to.height;
    const d = Math.sqrt(dx * dx + dy * dy);
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    const opacity = +style.opacity;
    return {
      delay,
      duration: (0, _internal.is_function)(duration) ? duration(d) : duration,
      easing,
      css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
    };
  }

  function transition(items, counterparts, intro) {
    return (node, params) => {
      items.set(params.key, {
        rect: node.getBoundingClientRect()
      });
      return () => {
        if (counterparts.has(params.key)) {
          const {
            rect
          } = counterparts.get(params.key);
          counterparts.delete(params.key);
          return crossfade(rect, node, params);
        } // if the node is disappearing altogether
        // (i.e. wasn't claimed by the other list)
        // then we need to supply an outro


        items.delete(params.key);
        return fallback && fallback(node, params, intro);
      };
    };
  }

  return [transition(to_send, to_receive, false), transition(to_receive, to_send, true)];
}
},{"../easing":"../node_modules/svelte/easing/index.mjs","../internal":"../node_modules/svelte/internal/index.mjs"}],"../node_modules/svelte/animate/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flip = flip;

var _easing = require("../easing");

var _internal = require("../internal");

function flip(node, animation, params) {
  const style = getComputedStyle(node);
  const transform = style.transform === 'none' ? '' : style.transform;
  const dx = animation.from.left - animation.to.left;
  const dy = animation.from.top - animation.to.top;
  const d = Math.sqrt(dx * dx + dy * dy);
  const {
    delay = 0,
    duration = d => Math.sqrt(d) * 120,
    easing = _easing.cubicOut
  } = params;
  return {
    delay,
    duration: (0, _internal.is_function)(duration) ? duration(d) : duration,
    easing,
    css: (_t, u) => `transform: ${transform} translate(${u * dx}px, ${u * dy}px);`
  };
}
},{"../easing":"../node_modules/svelte/easing/index.mjs","../internal":"../node_modules/svelte/internal/index.mjs"}],"../node_modules/svelte/store/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.derived = derived;
exports.readable = readable;
exports.writable = writable;
Object.defineProperty(exports, "get", {
  enumerable: true,
  get: function () {
    return _internal.get_store_value;
  }
});

var _internal = require("../internal");

const subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */

function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */


function writable(value, start = _internal.noop) {
  let stop;
  const subscribers = [];

  function set(new_value) {
    if ((0, _internal.safe_not_equal)(value, new_value)) {
      value = new_value;

      if (stop) {
        // store is ready
        const run_queue = !subscriber_queue.length;

        for (let i = 0; i < subscribers.length; i += 1) {
          const s = subscribers[i];
          s[1]();
          subscriber_queue.push(s, value);
        }

        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }

          subscriber_queue.length = 0;
        }
      }
    }
  }

  function update(fn) {
    set(fn(value));
  }

  function subscribe(run, invalidate = _internal.noop) {
    const subscriber = [run, invalidate];
    subscribers.push(subscriber);

    if (subscribers.length === 1) {
      stop = start(set) || _internal.noop;
    }

    run(value);
    return () => {
      const index = subscribers.indexOf(subscriber);

      if (index !== -1) {
        subscribers.splice(index, 1);
      }

      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }

  return {
    set,
    update,
    subscribe
  };
}

function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, set => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = _internal.noop;

    const sync = () => {
      if (pending) {
        return;
      }

      cleanup();
      const result = fn(single ? values[0] : values, set);

      if (auto) {
        set(result);
      } else {
        cleanup = (0, _internal.is_function)(result) ? result : _internal.noop;
      }
    };

    const unsubscribers = stores_array.map((store, i) => store.subscribe(value => {
      values[i] = value;
      pending &= ~(1 << i);

      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      (0, _internal.run_all)(unsubscribers);
      cleanup();
    };
  });
}
},{"../internal":"../node_modules/svelte/internal/index.mjs"}],"../node_modules/svelte/motion/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spring = spring;
exports.tweened = tweened;

var _store = require("../store");

var _internal = require("../internal");

var _easing = require("../easing");

function is_date(obj) {
  return Object.prototype.toString.call(obj) === '[object Date]';
}

function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === 'number' || is_date(current_value)) {
    // @ts-ignore
    const delta = target_value - current_value; // @ts-ignore

    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60); // guard div by 0

    const spring = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;

    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value; // settled
    } else {
      ctx.settled = false; // signal loop to keep ticking
      // @ts-ignore

      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    // @ts-ignore
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === 'object') {
    const next_value = {};

    for (const k in current_value) // @ts-ignore
    next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]); // @ts-ignore


    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}

function spring(value, opts = {}) {
  const store = (0, _store.writable)(value);
  const {
    stiffness = 0.15,
    damping = 0.8,
    precision = 0.01
  } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  /* eslint-disable @typescript-eslint/no-use-before-define */

  function set(new_value, opts = {}) {
    target_value = new_value;
    const token = current_token = {};

    if (value == null || opts.hard || spring.stiffness >= 1 && spring.damping >= 1) {
      cancel_task = true; // cancel any running animation

      last_time = (0, _internal.now)();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts.soft) {
      const rate = opts.soft === true ? .5 : +opts.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0; // infinite mass, unaffected by spring forces
    }

    if (!task) {
      last_time = (0, _internal.now)();
      cancel_task = false;
      task = (0, _internal.loop)(now => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }

        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring,
          settled: true,
          dt: (now - last_time) * 60 / 1000
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) task = null;
        return !ctx.settled;
      });
    }

    return new Promise(fulfil => {
      task.promise.then(() => {
        if (token === current_token) fulfil();
      });
    });
  }
  /* eslint-enable @typescript-eslint/no-use-before-define */


  const spring = {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring;
}

function get_interpolator(a, b) {
  if (a === b || a !== a) return () => a;
  const type = typeof a;

  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error('Cannot interpolate values of different type');
  }

  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return t => arr.map(fn => fn(t));
  }

  if (type === 'object') {
    if (!a || !b) throw new Error('Object cannot be null');

    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return t => new Date(a + t * delta);
    }

    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach(key => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return t => {
      const result = {};
      keys.forEach(key => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }

  if (type === 'number') {
    const delta = b - a;
    return t => a + t * delta;
  }

  throw new Error(`Cannot interpolate ${type} values`);
}

function tweened(value, defaults = {}) {
  const store = (0, _store.writable)(value);
  let task;
  let target_value = value;

  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }

    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = _easing.linear,
      interpolate = get_interpolator
    } = (0, _internal.assign)((0, _internal.assign)({}, defaults), opts);
    const start = (0, _internal.now)() + delay;
    let fn;
    task = (0, _internal.loop)(now => {
      if (now < start) return true;

      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === 'function') duration = duration(value, new_value);
        started = true;
      }

      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }

      const elapsed = now - start;

      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      } // @ts-ignore


      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }

  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
},{"../store":"../node_modules/svelte/store/index.mjs","../internal":"../node_modules/svelte/internal/index.mjs","../easing":"../node_modules/svelte/easing/index.mjs"}],"store.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filteredPizzas = exports.filterToppings = void 0;

var _store = require("svelte/store");

const filterToppings = (0, _store.writable)(new Set());
exports.filterToppings = filterToppings;
const filteredPizzas = (0, _store.writable)([]);
exports.filteredPizzas = filteredPizzas;
},{"svelte/store":"../node_modules/svelte/store/index.mjs"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"components/Filters.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _transition = require("svelte/transition");

var _store = require("../store.js");

/* components/Filters.svelte generated by Svelte v3.14.0 */
const file = "components/Filters.svelte";

function add_css() {
  var style = (0, _internal.element)("style");
  style.id = "svelte-jb4m33-style";
  style.textContent = ".tag.is-delete.svelte-jb4m33{cursor:pointer}.topping-filter.svelte-jb4m33{position:sticky;top:10px;z-index:1;padding:0 16px;background:linear-gradient(\n      0deg,\n      rgba(255, 255, 255, 0) 0%,\n      white 30%,\n      white 100%\n    )}\n";
  (0, _internal.append_dev)(document.head, style);
}

function get_each_context(ctx, list, i) {
  const child_ctx = Object.create(ctx);
  child_ctx.topping = list[i];
  return child_ctx;
} // (29:0) {#if $filterToppings.size !== 0}


function create_if_block(ctx) {
  let div;
  let div_transition;
  let current;
  let each_value = Array.from(ctx.$filterToppings);
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  const block = {
    c: function create() {
      div = (0, _internal.element)("div");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      (0, _internal.attr_dev)(div, "class", "field is-grouped is-grouped-multiline topping-filter svelte-jb4m33");
      (0, _internal.add_location)(div, file, 29, 2, 537);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }

      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.rm || changed.Array || changed.$filterToppings) {
        each_value = Array.from(ctx.$filterToppings);
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(changed, child_ctx);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }

        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.add_render_callback)(() => {
        if (!div_transition) div_transition = (0, _internal.create_bidirectional_transition)(div, _transition.slide, {}, true);
        div_transition.run(1);
      });
      current = true;
    },
    o: function outro(local) {
      if (!div_transition) div_transition = (0, _internal.create_bidirectional_transition)(div, _transition.slide, {}, false);
      div_transition.run(0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      (0, _internal.destroy_each)(each_blocks, detaching);
      if (detaching && div_transition) div_transition.end();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(29:0) {#if $filterToppings.size !== 0}",
    ctx
  });
  return block;
} // (34:4) {#each Array.from($filterToppings) as topping}


function create_each_block(ctx) {
  let div1;
  let div0;
  let i;
  let t0_value = ctx.topping + "";
  let t0;
  let t1;
  let b;
  let t2;
  let dispose;

  function click_handler(...args) {
    return ctx.click_handler(ctx, ...args);
  }

  const block = {
    c: function create() {
      div1 = (0, _internal.element)("div");
      div0 = (0, _internal.element)("div");
      i = (0, _internal.element)("i");
      t0 = (0, _internal.text)(t0_value);
      t1 = (0, _internal.space)();
      b = (0, _internal.element)("b");
      t2 = (0, _internal.space)();
      (0, _internal.attr_dev)(i, "class", "tag is-medium is-success");
      (0, _internal.add_location)(i, file, 36, 10, 757);
      (0, _internal.attr_dev)(b, "class", "tag is-delete is-medium svelte-jb4m33");
      (0, _internal.add_location)(b, file, 37, 10, 817);
      (0, _internal.attr_dev)(div0, "class", "tags has-addons");
      (0, _internal.add_location)(div0, file, 35, 8, 717);
      (0, _internal.attr_dev)(div1, "class", "control");
      (0, _internal.add_location)(div1, file, 34, 6, 687);
      dispose = (0, _internal.listen_dev)(b, "click", click_handler, false, false, false);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div1, anchor);
      (0, _internal.append_dev)(div1, div0);
      (0, _internal.append_dev)(div0, i);
      (0, _internal.append_dev)(i, t0);
      (0, _internal.append_dev)(div0, t1);
      (0, _internal.append_dev)(div0, b);
      (0, _internal.append_dev)(div1, t2);
    },
    p: function update(changed, new_ctx) {
      ctx = new_ctx;
      if (changed.$filterToppings && t0_value !== (t0_value = ctx.topping + "")) (0, _internal.set_data_dev)(t0, t0_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div1);
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(34:4) {#each Array.from($filterToppings) as topping}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx.$filterToppings.size !== 0 && create_if_block(ctx);
  const block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = (0, _internal.empty)();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      (0, _internal.insert_dev)(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (ctx.$filterToppings.size !== 0) {
        if (if_block) {
          if_block.p(changed, ctx);
          (0, _internal.transition_in)(if_block, 1);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          (0, _internal.transition_in)(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_block, 1, 1, () => {
          if_block = null;
        });
        (0, _internal.check_outros)();
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) (0, _internal.detach_dev)(if_block_anchor);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let $filterToppings;
  (0, _internal.validate_store)(_store.filterToppings, "filterToppings");
  (0, _internal.component_subscribe)($$self, _store.filterToppings, $$value => $$invalidate("$filterToppings", $filterToppings = $$value));

  const rm = topping => {
    $filterToppings.delete(topping);

    _store.filterToppings.set($filterToppings);
  };

  const click_handler = ({
    topping
  }) => rm(topping);

  $$self.$capture_state = () => {
    return {};
  };

  $$self.$inject_state = $$props => {
    if ("$filterToppings" in $$props) _store.filterToppings.set($filterToppings = $$props.$filterToppings);
  };

  return {
    rm,
    $filterToppings,
    click_handler
  };
}

class Filters extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document.getElementById("svelte-jb4m33-style")) add_css();
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Filters",
      options,
      id: create_fragment.name
    });
  }

}

var _default = Filters;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte/transition":"../node_modules/svelte/transition/index.mjs","../store.js":"store.js","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/Topping.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _store = require("../store.js");

/* components/Topping.svelte generated by Svelte v3.14.0 */
const file = "components/Topping.svelte";

function add_css() {
  var style = (0, _internal.element)("style");
  style.id = "svelte-ebk1jo-style";
  style.textContent = ".tag.svelte-ebk1jo{margin:4px;cursor:pointer}\n";
  (0, _internal.append_dev)(document.head, style);
}

function create_fragment(ctx) {
  let span;
  let t;
  let dispose;
  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      t = (0, _internal.text)(ctx.topping);
      (0, _internal.attr_dev)(span, "class", "tag svelte-ebk1jo");
      (0, _internal.toggle_class)(span, "is-medium", ctx.medium);
      (0, _internal.add_location)(span, file, 16, 0, 209);
      dispose = (0, _internal.listen_dev)(span, "click", ctx.click_handler, false, false, false);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);
      (0, _internal.append_dev)(span, t);
    },
    p: function update(changed, ctx) {
      if (changed.topping) (0, _internal.set_data_dev)(t, ctx.topping);

      if (changed.medium) {
        (0, _internal.toggle_class)(span, "is-medium", ctx.medium);
      }
    },
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let $filterToppings;
  (0, _internal.validate_store)(_store.filterToppings, "filterToppings");
  (0, _internal.component_subscribe)($$self, _store.filterToppings, $$value => $$invalidate("$filterToppings", $filterToppings = $$value));
  let {
    topping
  } = $$props;
  let {
    medium = false
  } = $$props;
  $filterToppings;
  const writable_props = ["topping", "medium"];
  Object.keys($$props).forEach(key => {
    if (!writable_props.includes(key) && !key.startsWith("$$")) console.warn(`<Topping> was created with unknown prop '${key}'`);
  });

  const click_handler = () => _store.filterToppings.set($filterToppings.add(topping));

  $$self.$set = $$props => {
    if ("topping" in $$props) $$invalidate("topping", topping = $$props.topping);
    if ("medium" in $$props) $$invalidate("medium", medium = $$props.medium);
  };

  $$self.$capture_state = () => {
    return {
      topping,
      medium,
      $filterToppings
    };
  };

  $$self.$inject_state = $$props => {
    if ("topping" in $$props) $$invalidate("topping", topping = $$props.topping);
    if ("medium" in $$props) $$invalidate("medium", medium = $$props.medium);
    if ("$filterToppings" in $$props) _store.filterToppings.set($filterToppings = $$props.$filterToppings);
  };

  return {
    topping,
    medium,
    $filterToppings,
    click_handler
  };
}

class Topping extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document.getElementById("svelte-ebk1jo-style")) add_css();
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      topping: 0,
      medium: 0
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Topping",
      options,
      id: create_fragment.name
    });
    const {
      ctx
    } = this.$$;
    const props = options.props || {};

    if (ctx.topping === undefined && !("topping" in props)) {
      console.warn("<Topping> was created without expected prop 'topping'");
    }
  }

  get topping() {
    throw new Error("<Topping>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set topping(value) {
    throw new Error("<Topping>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get medium() {
    throw new Error("<Topping>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set medium(value) {
    throw new Error("<Topping>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = Topping;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","../store.js":"store.js","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/Toppings.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _Topping = _interopRequireDefault(require("./Topping.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/Toppings.svelte generated by Svelte v3.14.0 */
const file = "components/Toppings.svelte";

function get_each_context(ctx, list, i) {
  const child_ctx = Object.create(ctx);
  child_ctx.topping = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  const child_ctx = Object.create(ctx);
  child_ctx.topping = list[i];
  return child_ctx;
} // (8:2) {#each toppings as topping}


function create_each_block_1(ctx) {
  let current;
  const topping = new _Topping.default({
    props: {
      topping: ctx.topping
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      (0, _internal.create_component)(topping.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(topping, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      const topping_changes = {};
      if (changed.toppings) topping_changes.topping = ctx.topping;
      topping.$set(topping_changes);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(topping.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(topping.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(topping, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block_1.name,
    type: "each",
    source: "(8:2) {#each toppings as topping}",
    ctx
  });
  return block;
} // (13:2) {#each toppings as topping}


function create_each_block(ctx) {
  let current;
  const topping = new _Topping.default({
    props: {
      medium: true,
      topping: ctx.topping
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      (0, _internal.create_component)(topping.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(topping, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      const topping_changes = {};
      if (changed.toppings) topping_changes.topping = ctx.topping;
      topping.$set(topping_changes);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(topping.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(topping.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(topping, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(13:2) {#each toppings as topping}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let div0;
  let t;
  let div1;
  let current;
  let each_value_1 = ctx.toppings;
  let each_blocks_1 = [];

  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  const out = i => (0, _internal.transition_out)(each_blocks_1[i], 1, 1, () => {
    each_blocks_1[i] = null;
  });

  let each_value = ctx.toppings;
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  const out_1 = i => (0, _internal.transition_out)(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  const block = {
    c: function create() {
      div0 = (0, _internal.element)("div");

      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }

      t = (0, _internal.space)();
      div1 = (0, _internal.element)("div");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      (0, _internal.attr_dev)(div0, "class", "is-hidden-tablet");
      (0, _internal.add_location)(div0, file, 6, 0, 86);
      (0, _internal.attr_dev)(div1, "class", "content is-hidden-mobile");
      (0, _internal.add_location)(div1, file, 11, 0, 190);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div0, anchor);

      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(div0, null);
      }

      (0, _internal.insert_dev)(target, t, anchor);
      (0, _internal.insert_dev)(target, div1, anchor);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div1, null);
      }

      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.toppings) {
        each_value_1 = ctx.toppings;
        let i;

        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx, each_value_1, i);

          if (each_blocks_1[i]) {
            each_blocks_1[i].p(changed, child_ctx);
            (0, _internal.transition_in)(each_blocks_1[i], 1);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            (0, _internal.transition_in)(each_blocks_1[i], 1);
            each_blocks_1[i].m(div0, null);
          }
        }

        (0, _internal.group_outros)();

        for (i = each_value_1.length; i < each_blocks_1.length; i += 1) {
          out(i);
        }

        (0, _internal.check_outros)();
      }

      if (changed.toppings) {
        each_value = ctx.toppings;
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(changed, child_ctx);
            (0, _internal.transition_in)(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            (0, _internal.transition_in)(each_blocks[i], 1);
            each_blocks[i].m(div1, null);
          }
        }

        (0, _internal.group_outros)();

        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out_1(i);
        }

        (0, _internal.check_outros)();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (let i = 0; i < each_value_1.length; i += 1) {
        (0, _internal.transition_in)(each_blocks_1[i]);
      }

      for (let i = 0; i < each_value.length; i += 1) {
        (0, _internal.transition_in)(each_blocks[i]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks_1 = each_blocks_1.filter(Boolean);

      for (let i = 0; i < each_blocks_1.length; i += 1) {
        (0, _internal.transition_out)(each_blocks_1[i]);
      }

      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        (0, _internal.transition_out)(each_blocks[i]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div0);
      (0, _internal.destroy_each)(each_blocks_1, detaching);
      if (detaching) (0, _internal.detach_dev)(t);
      if (detaching) (0, _internal.detach_dev)(div1);
      (0, _internal.destroy_each)(each_blocks, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let {
    toppings
  } = $$props;
  const writable_props = ["toppings"];
  Object.keys($$props).forEach(key => {
    if (!writable_props.includes(key) && !key.startsWith("$$")) console.warn(`<Toppings> was created with unknown prop '${key}'`);
  });

  $$self.$set = $$props => {
    if ("toppings" in $$props) $$invalidate("toppings", toppings = $$props.toppings);
  };

  $$self.$capture_state = () => {
    return {
      toppings
    };
  };

  $$self.$inject_state = $$props => {
    if ("toppings" in $$props) $$invalidate("toppings", toppings = $$props.toppings);
  };

  return {
    toppings
  };
}

class Toppings extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      toppings: 0
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Toppings",
      options,
      id: create_fragment.name
    });
    const {
      ctx
    } = this.$$;
    const props = options.props || {};

    if (ctx.toppings === undefined && !("toppings" in props)) {
      console.warn("<Toppings> was created without expected prop 'toppings'");
    }
  }

  get toppings() {
    throw new Error("<Toppings>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set toppings(value) {
    throw new Error("<Toppings>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = Toppings;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","./Topping.svelte":"components/Topping.svelte"}],"components/Pizza.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _Toppings = _interopRequireDefault(require("./Toppings.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/Pizza.svelte generated by Svelte v3.14.0 */
const file = "components/Pizza.svelte";

function add_css() {
  var style = (0, _internal.element)("style");
  style.id = "svelte-1yf9a9m-style";
  style.textContent = "@media only screen and (max-width: 768px){.card-content.svelte-1yf9a9m{padding:1rem}.card-footer.svelte-1yf9a9m{border-top:0;padding-bottom:0.5rem}}\n";
  (0, _internal.append_dev)(document.head, style);
} // (35:6) {#if featured}


function create_if_block(ctx) {
  let span;
  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      span.textContent = "Novinky";
      (0, _internal.attr_dev)(span, "class", "tag is-warning");
      (0, _internal.set_style)(span, "margin-left", "1rem");
      (0, _internal.add_location)(span, file, 35, 8, 779);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(35:6) {#if featured}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let div4;
  let header;
  let p;
  let span0;
  let t0;
  let t1;
  let span1;
  let t2;
  let t3;
  let t4;
  let div0;
  let small;
  let t5;
  let t6;
  let t7;
  let span2;
  let strong;
  let t8;
  let t9;
  let div1;
  let t10;
  let footer;
  let div2;
  let span3;
  let t11;
  let t12;
  let t13;
  let div3;
  let span4;
  let t14;
  let current;
  let if_block = ctx.featured && create_if_block(ctx);
  const toppings_1 = new _Toppings.default({
    props: {
      toppings: ctx.toppings
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div4 = (0, _internal.element)("div");
      header = (0, _internal.element)("header");
      p = (0, _internal.element)("p");
      span0 = (0, _internal.element)("span");
      t0 = (0, _internal.text)(ctx.number);
      t1 = (0, _internal.space)();
      span1 = (0, _internal.element)("span");
      t2 = (0, _internal.text)(ctx.name);
      t3 = (0, _internal.space)();
      if (if_block) if_block.c();
      t4 = (0, _internal.space)();
      div0 = (0, _internal.element)("div");
      small = (0, _internal.element)("small");
      t5 = (0, _internal.text)(ctx.weight);
      t6 = (0, _internal.text)("g");
      t7 = (0, _internal.space)();
      span2 = (0, _internal.element)("span");
      strong = (0, _internal.element)("strong");
      t8 = (0, _internal.text)(ctx.amount);
      t9 = (0, _internal.space)();
      div1 = (0, _internal.element)("div");
      (0, _internal.create_component)(toppings_1.$$.fragment);
      t10 = (0, _internal.space)();
      footer = (0, _internal.element)("footer");
      div2 = (0, _internal.element)("div");
      span3 = (0, _internal.element)("span");
      t11 = (0, _internal.text)(ctx.weight);
      t12 = (0, _internal.text)("g");
      t13 = (0, _internal.space)();
      div3 = (0, _internal.element)("div");
      span4 = (0, _internal.element)("span");
      t14 = (0, _internal.text)(ctx.amount);
      (0, _internal.attr_dev)(span0, "class", "tag is-success");
      (0, _internal.set_style)(span0, "margin-right", "0.5rem");
      (0, _internal.add_location)(span0, file, 32, 6, 632);
      (0, _internal.attr_dev)(span1, "class", "is-size-5");
      (0, _internal.add_location)(span1, file, 33, 6, 712);
      (0, _internal.attr_dev)(p, "class", "card-header-title");
      (0, _internal.add_location)(p, file, 31, 4, 596);
      (0, _internal.set_style)(small, "margin-right", "1rem");
      (0, _internal.add_location)(small, file, 40, 6, 929);
      (0, _internal.add_location)(strong, file, 42, 8, 1035);
      (0, _internal.attr_dev)(span2, "class", "tag is-medium is-warning");
      (0, _internal.add_location)(span2, file, 41, 6, 987);
      (0, _internal.attr_dev)(div0, "class", "card-header-icon is-hidden-mobile");
      (0, _internal.add_location)(div0, file, 39, 4, 875);
      (0, _internal.attr_dev)(header, "class", "card-header");
      (0, _internal.add_location)(header, file, 30, 2, 563);
      (0, _internal.attr_dev)(div1, "class", "card-content svelte-1yf9a9m");
      (0, _internal.add_location)(div1, file, 46, 2, 1100);
      (0, _internal.attr_dev)(span3, "class", "tag is-medium");
      (0, _internal.add_location)(span3, file, 54, 6, 1275);
      (0, _internal.add_location)(div2, file, 53, 4, 1263);
      (0, _internal.attr_dev)(span4, "class", "tag is-medium is-warning");
      (0, _internal.add_location)(span4, file, 57, 6, 1347);
      (0, _internal.add_location)(div3, file, 56, 4, 1335);
      (0, _internal.attr_dev)(footer, "class", "card-footer is-hidden-tablet svelte-1yf9a9m");
      (0, _internal.set_style)(footer, "justify-content", "space-around");
      (0, _internal.add_location)(footer, file, 49, 2, 1166);
      (0, _internal.attr_dev)(div4, "class", "card");
      (0, _internal.add_location)(div4, file, 29, 0, 542);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div4, anchor);
      (0, _internal.append_dev)(div4, header);
      (0, _internal.append_dev)(header, p);
      (0, _internal.append_dev)(p, span0);
      (0, _internal.append_dev)(span0, t0);
      (0, _internal.append_dev)(p, t1);
      (0, _internal.append_dev)(p, span1);
      (0, _internal.append_dev)(span1, t2);
      (0, _internal.append_dev)(p, t3);
      if (if_block) if_block.m(p, null);
      (0, _internal.append_dev)(header, t4);
      (0, _internal.append_dev)(header, div0);
      (0, _internal.append_dev)(div0, small);
      (0, _internal.append_dev)(small, t5);
      (0, _internal.append_dev)(small, t6);
      (0, _internal.append_dev)(div0, t7);
      (0, _internal.append_dev)(div0, span2);
      (0, _internal.append_dev)(span2, strong);
      (0, _internal.append_dev)(strong, t8);
      (0, _internal.append_dev)(div4, t9);
      (0, _internal.append_dev)(div4, div1);
      (0, _internal.mount_component)(toppings_1, div1, null);
      (0, _internal.append_dev)(div4, t10);
      (0, _internal.append_dev)(div4, footer);
      (0, _internal.append_dev)(footer, div2);
      (0, _internal.append_dev)(div2, span3);
      (0, _internal.append_dev)(span3, t11);
      (0, _internal.append_dev)(span3, t12);
      (0, _internal.append_dev)(footer, t13);
      (0, _internal.append_dev)(footer, div3);
      (0, _internal.append_dev)(div3, span4);
      (0, _internal.append_dev)(span4, t14);
      current = true;
    },
    p: function update(changed, ctx) {
      if (!current || changed.number) (0, _internal.set_data_dev)(t0, ctx.number);
      if (!current || changed.name) (0, _internal.set_data_dev)(t2, ctx.name);

      if (ctx.featured) {
        if (!if_block) {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(p, null);
        } else {}
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (!current || changed.weight) (0, _internal.set_data_dev)(t5, ctx.weight);
      if (!current || changed.amount) (0, _internal.set_data_dev)(t8, ctx.amount);
      const toppings_1_changes = {};
      if (changed.toppings) toppings_1_changes.toppings = ctx.toppings;
      toppings_1.$set(toppings_1_changes);
      if (!current || changed.weight) (0, _internal.set_data_dev)(t11, ctx.weight);
      if (!current || changed.amount) (0, _internal.set_data_dev)(t14, ctx.amount);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(toppings_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(toppings_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div4);
      if (if_block) if_block.d();
      (0, _internal.destroy_component)(toppings_1);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let {
    name = ""
  } = $$props;
  let {
    toppings = []
  } = $$props;
  let {
    weight = 0
  } = $$props;
  let {
    price = 0
  } = $$props;
  let {
    currency = "EUR"
  } = $$props;
  let {
    featured = false
  } = $$props;
  let {
    number = 0
  } = $$props;
  const writable_props = ["name", "toppings", "weight", "price", "currency", "featured", "number"];
  Object.keys($$props).forEach(key => {
    if (!writable_props.includes(key) && !key.startsWith("$$")) console.warn(`<Pizza> was created with unknown prop '${key}'`);
  });

  $$self.$set = $$props => {
    if ("name" in $$props) $$invalidate("name", name = $$props.name);
    if ("toppings" in $$props) $$invalidate("toppings", toppings = $$props.toppings);
    if ("weight" in $$props) $$invalidate("weight", weight = $$props.weight);
    if ("price" in $$props) $$invalidate("price", price = $$props.price);
    if ("currency" in $$props) $$invalidate("currency", currency = $$props.currency);
    if ("featured" in $$props) $$invalidate("featured", featured = $$props.featured);
    if ("number" in $$props) $$invalidate("number", number = $$props.number);
  };

  $$self.$capture_state = () => {
    return {
      name,
      toppings,
      weight,
      price,
      currency,
      featured,
      number,
      amount
    };
  };

  $$self.$inject_state = $$props => {
    if ("name" in $$props) $$invalidate("name", name = $$props.name);
    if ("toppings" in $$props) $$invalidate("toppings", toppings = $$props.toppings);
    if ("weight" in $$props) $$invalidate("weight", weight = $$props.weight);
    if ("price" in $$props) $$invalidate("price", price = $$props.price);
    if ("currency" in $$props) $$invalidate("currency", currency = $$props.currency);
    if ("featured" in $$props) $$invalidate("featured", featured = $$props.featured);
    if ("number" in $$props) $$invalidate("number", number = $$props.number);
    if ("amount" in $$props) $$invalidate("amount", amount = $$props.amount);
  };

  let amount;

  $$self.$$.update = (changed = {
    price: 1,
    currency: 1
  }) => {
    if (changed.price || changed.currency) {
      $: $$invalidate("amount", amount = price.toLocaleString("sk", {
        style: "currency",
        currency
      }));
    }
  };

  return {
    name,
    toppings,
    weight,
    price,
    currency,
    featured,
    number,
    amount
  };
}

class Pizza extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document.getElementById("svelte-1yf9a9m-style")) add_css();
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      name: 0,
      toppings: 0,
      weight: 0,
      price: 0,
      currency: 0,
      featured: 0,
      number: 0
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Pizza",
      options,
      id: create_fragment.name
    });
  }

  get name() {
    throw new Error("<Pizza>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set name(value) {
    throw new Error("<Pizza>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get toppings() {
    throw new Error("<Pizza>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set toppings(value) {
    throw new Error("<Pizza>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get weight() {
    throw new Error("<Pizza>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set weight(value) {
    throw new Error("<Pizza>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get price() {
    throw new Error("<Pizza>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set price(value) {
    throw new Error("<Pizza>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get currency() {
    throw new Error("<Pizza>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set currency(value) {
    throw new Error("<Pizza>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get featured() {
    throw new Error("<Pizza>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set featured(value) {
    throw new Error("<Pizza>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get number() {
    throw new Error("<Pizza>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set number(value) {
    throw new Error("<Pizza>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = Pizza;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","./Toppings.svelte":"components/Toppings.svelte","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"pizzas.json":[function(require,module,exports) {
module.exports = [{
  "name": "Mateo",
  "price": 5.6,
  "toppings": ["par. omáčka", "syr", "šunka", "šampióny", "kukurica"],
  "weight": 780,
  "currency": "EUR",
  "number": 1,
  "featured": true
}, {
  "name": "Margherita con mozzarella",
  "price": 5.3,
  "toppings": ["par. omáčka", "mozzarella", "paradajka", "syr"],
  "weight": 650,
  "currency": "EUR",
  "number": 2,
  "featured": false
}, {
  "name": "Funghi",
  "price": 4.8,
  "toppings": ["par. omáčka", "syr", "šampióny"],
  "weight": 650,
  "currency": "EUR",
  "number": 3,
  "featured": false
}, {
  "name": "Prosciutto",
  "price": 4.8,
  "toppings": ["par. omáčka", "syr", "šunka"],
  "weight": 650,
  "currency": "EUR",
  "number": 4,
  "featured": false
}, {
  "name": "Prosciutto e funghi",
  "price": 5.3,
  "toppings": ["par. omáčka", "syr", "šunka", "šampióny"],
  "weight": 750,
  "currency": "EUR",
  "number": 5,
  "featured": false
}, {
  "name": "Quattro fromaggi",
  "price": 5.8,
  "toppings": ["mozzarella", "eidam", "niva", "kolba"],
  "weight": 680,
  "currency": "EUR",
  "number": 6,
  "featured": false
}, {
  "name": "Tono",
  "price": 6.1,
  "toppings": ["par. omáčka", "syr", "tuniak", "cibuľa", "olivy"],
  "weight": 730,
  "currency": "EUR",
  "number": 7,
  "featured": true
}, {
  "name": "Quattro stagioni",
  "price": 5.6,
  "toppings": ["par. omáčka", "syr", "šunka", "slanina", "saláma", "klobása"],
  "weight": 800,
  "currency": "EUR",
  "number": 8,
  "featured": false
}, {
  "name": "Quattro carne",
  "price": 5.8,
  "toppings": ["par. omáčka", "syr", "šunka", "slanina", "saláma", "klobása"],
  "weight": 800,
  "currency": "EUR",
  "number": 9,
  "featured": false
}, {
  "name": "Toto",
  "price": 5.6,
  "toppings": ["par. omáčka", "syr", "saláma", "cibuľa", "šampióny", "feferóny"],
  "weight": 800,
  "currency": "EUR",
  "number": 10,
  "featured": false
}, {
  "name": "Rusticana",
  "price": 5.6,
  "toppings": ["par. omáčka", "syr", "šunka", "olivy", "kukurica", "artičoky", "syr Cottage"],
  "weight": 850,
  "currency": "EUR",
  "number": 11,
  "featured": false
}, {
  "name": "Fattoria",
  "price": 5.6,
  "toppings": ["par. omáčka", "syr", "šunka", "niva", "olivy"],
  "weight": 750,
  "currency": "EUR",
  "number": 12,
  "featured": false
}, {
  "name": "Diavola",
  "price": 5.6,
  "toppings": ["par. omáčka", "syr", "saláma", "cibuľa", "feferóny"],
  "weight": 700,
  "currency": "EUR",
  "number": 13,
  "featured": false
}, {
  "name": "Provinciale",
  "price": 5.6,
  "toppings": ["par. omáčka", "syr", "šunka", "slanina", "kukurica", "feferóny"],
  "weight": 750,
  "currency": "EUR",
  "number": 14,
  "featured": false
}, {
  "name": "Spinacia",
  "price": 5.6,
  "toppings": ["syr. smotana", "slanina", "cesnak", "vajce", "špenát"],
  "weight": 750,
  "currency": "EUR",
  "number": 15,
  "featured": false
}, {
  "name": "Hawai",
  "price": 5.6,
  "toppings": ["par. omáčka", "syr", "šunka", "ananás"],
  "weight": 750,
  "currency": "EUR",
  "number": 16,
  "featured": false
}, {
  "name": "Pizza Majstra Slovenska",
  "price": 6.6,
  "toppings": ["par. omáčka", "syr", "mozzarella", "losos", "cappari", "paradajka"],
  "weight": 820,
  "currency": "EUR",
  "number": 17,
  "featured": false
}, {
  "name": "Prosciutto crudo rucola",
  "price": 6.6,
  "toppings": ["par. omáčka", "syr", "mozzarella", "prosciutto crudo", "ruccola", "paradajka"],
  "weight": 850,
  "currency": "EUR",
  "number": 18,
  "featured": false
}, {
  "name": "Družstevná",
  "price": 5.6,
  "toppings": ["par. omáčka", "syr", "šunka", "slanina", "klobása", "paprika", "baranie rohy"],
  "weight": 800,
  "currency": "EUR",
  "number": 19,
  "featured": false
}, {
  "name": "Hercules",
  "price": 5.6,
  "toppings": ["par. omáčka", "syr", "saláma", "paprika", "kukurica", "feferóny", "gorgonzola"],
  "weight": 800,
  "currency": "EUR",
  "number": 20,
  "featured": false
}, {
  "name": "Pizza con salami",
  "price": 5.1,
  "toppings": ["par. omáčka", "syr", "saláma"],
  "weight": 660,
  "currency": "EUR",
  "number": 21,
  "featured": false
}, {
  "name": "Pizza France",
  "price": 5.6,
  "toppings": ["par. omáčka", "syr", "syr camembert", "brusnice"],
  "weight": 750,
  "currency": "EUR",
  "number": 22,
  "featured": false
}, {
  "name": "Pizza Pancetta",
  "price": 5.6,
  "toppings": ["par. omáčka", "syr", "slanina", "cibuľa"],
  "weight": 730,
  "currency": "EUR",
  "number": 23,
  "featured": false
}, {
  "name": "Pizza Štangle",
  "price": 2.5,
  "toppings": [],
  "weight": 300,
  "currency": "EUR",
  "number": 24,
  "featured": false
}];
},{}],"components/Pizzas.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _easing = require("svelte/easing");

var _transition = require("svelte/transition");

var _animate = require("svelte/animate");

var _motion = require("svelte/motion");

var _Filters = _interopRequireDefault(require("./Filters.svelte"));

var _Pizza = _interopRequireDefault(require("./Pizza.svelte"));

var _pizzas = _interopRequireDefault(require("../pizzas.json"));

var _store = require("../store.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/Pizzas.svelte generated by Svelte v3.14.0 */
const file = "components/Pizzas.svelte";

function get_each_context(ctx, list, i) {
  const child_ctx = Object.create(ctx);
  child_ctx.pizza = list[i];
  return child_ctx;
} // (27:2) {#each filterPizzas as pizza (pizza.number)}


function create_each_block(key_1, ctx) {
  let li;
  let t;
  let li_transition;
  let rect;
  let stop_animation = _internal.noop;
  let current;
  const pizza_spread_levels = [ctx.pizza];
  let pizza_props = {};

  for (let i = 0; i < pizza_spread_levels.length; i += 1) {
    pizza_props = (0, _internal.assign)(pizza_props, pizza_spread_levels[i]);
  }

  const pizza = new _Pizza.default({
    props: pizza_props,
    $$inline: true
  });
  const block = {
    key: key_1,
    first: null,
    c: function create() {
      li = (0, _internal.element)("li");
      (0, _internal.create_component)(pizza.$$.fragment);
      t = (0, _internal.space)();
      (0, _internal.attr_dev)(li, "class", "column is-half");
      (0, _internal.add_location)(li, file, 27, 4, 820);
      this.first = li;
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, li, anchor);
      (0, _internal.mount_component)(pizza, li, null);
      (0, _internal.append_dev)(li, t);
      current = true;
    },
    p: function update(changed, ctx) {
      const pizza_changes = changed.filterPizzas ? (0, _internal.get_spread_update)(pizza_spread_levels, [(0, _internal.get_spread_object)(ctx.pizza)]) : {};
      pizza.$set(pizza_changes);
    },
    r: function measure() {
      rect = li.getBoundingClientRect();
    },
    f: function fix() {
      (0, _internal.fix_position)(li);
      stop_animation();
      (0, _internal.add_transform)(li, rect);
    },
    a: function animate() {
      stop_animation();
      stop_animation = (0, _internal.create_animation)(li, rect, _animate.flip, ctx.duration);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(pizza.$$.fragment, local);
      (0, _internal.add_render_callback)(() => {
        if (!li_transition) li_transition = (0, _internal.create_bidirectional_transition)(li, _transition.fade, {}, true);
        li_transition.run(1);
      });
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(pizza.$$.fragment, local);
      if (!li_transition) li_transition = (0, _internal.create_bidirectional_transition)(li, _transition.fade, {}, false);
      li_transition.run(0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(li);
      (0, _internal.destroy_component)(pizza);
      if (detaching && li_transition) li_transition.end();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(27:2) {#each filterPizzas as pizza (pizza.number)}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let t;
  let ul;
  let each_blocks = [];
  let each_1_lookup = new Map();
  let current;
  const filters = new _Filters.default({
    $$inline: true
  });
  let each_value = ctx.filterPizzas;

  const get_key = ctx => ctx.pizza.number;

  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }

  const block = {
    c: function create() {
      (0, _internal.create_component)(filters.$$.fragment);
      t = (0, _internal.space)();
      ul = (0, _internal.element)("ul");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      (0, _internal.attr_dev)(ul, "class", "columns is-multiline is-desktop");
      (0, _internal.add_location)(ul, file, 25, 0, 724);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(filters, target, anchor);
      (0, _internal.insert_dev)(target, t, anchor);
      (0, _internal.insert_dev)(target, ul, anchor);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }

      current = true;
    },
    p: function update(changed, ctx) {
      const each_value = ctx.filterPizzas;
      (0, _internal.group_outros)();

      for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].r();

      each_blocks = (0, _internal.update_keyed_each)(each_blocks, changed, get_key, 1, ctx, each_value, each_1_lookup, ul, _internal.fix_and_outro_and_destroy_block, create_each_block, null, get_each_context);

      for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].a();

      (0, _internal.check_outros)();
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(filters.$$.fragment, local);

      for (let i = 0; i < each_value.length; i += 1) {
        (0, _internal.transition_in)(each_blocks[i]);
      }

      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(filters.$$.fragment, local);

      for (let i = 0; i < each_blocks.length; i += 1) {
        (0, _internal.transition_out)(each_blocks[i]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(filters, detaching);
      if (detaching) (0, _internal.detach_dev)(t);
      if (detaching) (0, _internal.detach_dev)(ul);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function containAll(set, subset) {
  return Array.from(subset).every(elem => set.has(elem));
}

function instance($$self, $$props, $$invalidate) {
  let $filterToppings;
  (0, _internal.validate_store)(_store.filterToppings, "filterToppings");
  (0, _internal.component_subscribe)($$self, _store.filterToppings, $$value => $$invalidate("$filterToppings", $filterToppings = $$value));
  let duration = {
    duration: 600
  };

  $$self.$capture_state = () => {
    return {};
  };

  $$self.$inject_state = $$props => {
    if ("duration" in $$props) $$invalidate("duration", duration = $$props.duration);
    if ("filterPizzas" in $$props) $$invalidate("filterPizzas", filterPizzas = $$props.filterPizzas);
    if ("$filterToppings" in $$props) _store.filterToppings.set($filterToppings = $$props.$filterToppings);
  };

  let filterPizzas;

  $$self.$$.update = (changed = {
    $filterToppings: 1
  }) => {
    if (changed.$filterToppings) {
      $: $$invalidate("filterPizzas", filterPizzas = _pizzas.default.filter(pizza => {
        if ($filterToppings.size === 0) return true;
        const toppings = new Set(pizza.toppings);
        return containAll(toppings, $filterToppings);
      }));
    }
  };

  return {
    duration,
    filterPizzas
  };
}

class Pizzas extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Pizzas",
      options,
      id: create_fragment.name
    });
  }

}

var _default = Pizzas;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte/easing":"../node_modules/svelte/easing/index.mjs","svelte/transition":"../node_modules/svelte/transition/index.mjs","svelte/animate":"../node_modules/svelte/animate/index.mjs","svelte/motion":"../node_modules/svelte/motion/index.mjs","./Filters.svelte":"components/Filters.svelte","./Pizza.svelte":"components/Pizza.svelte","../pizzas.json":"pizzas.json","../store.js":"store.js"}],"components/App.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _Pizzas = _interopRequireDefault(require("./Pizzas.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/App.svelte generated by Svelte v3.14.0 */
const file = "components/App.svelte";

function create_fragment(ctx) {
  let current;
  const pizzas = new _Pizzas.default({
    $$inline: true
  });
  const block = {
    c: function create() {
      (0, _internal.create_component)(pizzas.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(pizzas, target, anchor);
      current = true;
    },
    p: _internal.noop,
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(pizzas.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(pizzas.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(pizzas, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

class App extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, null, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "App",
      options,
      id: create_fragment.name
    });
  }

}

var _default = App;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","./Pizzas.svelte":"components/Pizzas.svelte"}],"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _App = _interopRequireDefault(require("./components/App.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _App.default({
  target: document.getElementById("app")
});
var _default = app;
exports.default = _default;
},{"./components/App.svelte":"components/App.svelte"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36111" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map