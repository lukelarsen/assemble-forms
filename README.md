[Assemble]:                http://assemblecss.com
[Assemble Base]:           https://github.com/lukelarsen/assemble-base

# Assemble Forms
Assemble Forms is a component of the [Assemble] CSS Framework. It will give you a solid base for forms in your project. It has some default styles that can easily be overridden so you can add your own look.

## Requirements
Assemble Forms requires [Assemble Base].

## Installation
npm install assemble-forms --save-dev

## Usage
### Gulp
```js
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var assembleBase = require('assemble-base');
var assembleForms = require('assemble-forms');

gulp.task('css', function () {
    var processors = [
        assembleBase,
        assembleForms
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});
```
Then import the _assemble-forms.css file from your css file.
```css
@import '../node_modules/assemble-base/base';

/*
Override variables here before the Assemble Components are loaded.
*/

@import '../node_modules/assemble-forms/assemble-forms';
```

## Types
##### Text Input & Textarea
```html
<form>
    <ul class="form-quarters">
        <li>
            <label>Input Field 1</label>
            <input type="text">
        </li>
        <li>
            <label>Input Field 2</label>
            <input type="text">
        </li>
        <li>
            <label>Input Field 3</label>
            <input type="text">
        </li>
        <li>
            <label>Input Field 4</label>
            <input type="text">
        </li>
        <li>
            <label>Textarea</label>
            <textarea></textarea>
        </li>
    </ul>
</form>
```

##### Checkbox & Radio
```html
<form>
    <ul class="form-thirds">
        <li>
            <span class="label">Animals</span>
            <ul class="check-list">
                <li>
                    <input id="lizard" type="checkbox">
                    <label for="lizard">Lizard</label>
                </li>
                <li>
                    <input id="penguin" type="checkbox">
                    <label for="penguin">Penguin</label>
                </li>
                <li>
                    <input id="crab" type="checkbox">
                    <label for="crab">Crab</label>
                </li>
            </ul>
        </li>
        <li>
            <span class="label">Colors</span>
            <ul class="check-list">
                <li>
                    <input id="blue" type="radio" name="color">
                    <label for="blue">Blue</label>
                </li>
                <li>
                    <input id="green" type="radio" name="color">
                    <label for="green">Green</label>
                </li>
                <li>
                    <input id="yellow" type="radio" name="color">
                    <label for="yellow">Yellow</label>
                </li>
            </ul>
        </li>
    </ul>
</form>
```

##### Inline Checkbox & Radio
```html
<form>
    <ul class="form-thirds">
        <li>
            <span class="label">Animals</span>
            <ul class="check-list  check-list--inline">
                <li>
                    <input id="lizard" type="checkbox">
                    <label for="lizard">Lizard</label>
                </li>
                <li>
                    <input id="penguin" type="checkbox">
                    <label for="penguin">Penguin</label>
                </li>
                <li>
                    <input id="crab" type="checkbox">
                    <label for="crab">Crab</label>
                </li>
            </ul>
        </li>
        <li>
            <span class="label">Colors</span>
            <ul class="check-list  check-list--inline">
                <li>
                    <input id="blue" type="radio" name="color">
                    <label for="blue">Blue</label>
                </li>
                <li>
                    <input id="green" type="radio" name="color">
                    <label for="green">Green</label>
                </li>
                <li>
                    <input id="yellow" type="radio" name="color">
                    <label for="yellow">Yellow</label>
                </li>
            </ul>
        </li>
    </ul>
</form>
```

##### Uploads Selects
```html
<form>
    <ul class="form-thirds">
        <li>
            <label>File</label>
            <input type="file">
        </li>
        <li>
            <label>File</label>
            <select>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
            </select>
        </li>
    </ul>
</form>
```

##### Errors & Disabled Fields
```html
<form>
    <ul class="form-thirds">
        <li>
            <label>Input Field 1</label>
            <input type="text">
        </li>
        <li class="form-error">
            <span class="label">Gender</span>
            <ul class="check-list  check-list--inline">
                <li>
                    <input type="radio">
                    <label>Male</label>
                </li>
                <li>
                    <input type="radio">
                    <label>Female</label>
                </li>
            </ul>
            <span class="form-error__message">Error message</span>
        </li>
        <li>
            <label>File</label>
            <select>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
            </select>
        </li>
        <li class="form-error">
            <label>Input Field 4</label>
            <input type="text">
            <span class="form-error__message">Error message</span>
        </li>
        <li class="form-disabled">
            <label>Disabled Field</label>
            <input type="text">
        </li>
    </ul>
</form>
```

###### Note
For disabled forms to work $form-disabled must be set to true.
```css
$form-disabled: true;
```

## Options
Options are set with variables. These variables are already set with their default values so they will just work out of the box. If you wish to change them just define the variable you want to change before you load the _assemble-forms.css file. You may wish you see [Assemble Base] for more examples and directions for setting up a Assemble project.

### Design Variables

##### $form-item-push-bottom
- Space between form rows.
- Default: 10px;
- Type: Number
```css
$form-item-push-bottom: 15px;
```

##### $form-input-background
- Backround of input and textarea items.
- Default:  #FFF;
- Type: Color
```css
$form-input-background: #CCC;
```

##### $form-item-border-color
- Color of the border for a form item.
- Default: #808080;
- Type: Color
```css
$form-item-border-color: #000;
```

##### $form-item-border-size
- Size of the border for a form item.
- Default: 1px;
- Type: Number
```css
$form-item-border-size: 3px;
```

##### $form-item-border-style
- Style of the border for a form item.
- Default: solid;
- Type: String
```css
$form-item-border-style: dashed
```

##### $form-item-border-radius
- Radius of the border for a form item.
- Default: 0px;
- Type: Number
```css
$form-item-border-radius: 5px;
```

##### $form-item-padding
- Padding for a form item.
- Default: 4px 8px;
- Type: String
```css
$form-item-padding: 6px;
```

##### $form-item-height
- Height for a form item.
- Default: 35px;
- Type: Number
```css
$form-item-height: 30px;
```

##### $form-item-file-padding
- Padding for a file input form item.
- Default: 6px;
- Type: Number
```css
$form-item-file-padding: 8px;
```

##### $form-check-list-vertical-spacing
- Vertical spacing between check-list form items.
- Default: 5px;
- Type: Number
```css
$form-check-list-vertical-spacing: 8px;
```

##### $form-spoken-padding-input
- Padding for spokem form inputs.
- Default: 3px 4px;
- Type: Number
```css
$form-spoken-padding-input: 5px;
```

##### $form-spoken-padding-select
- Padding for spokem form selects.
- Default: 1px 1.67em 3px 4px;
- Type: String
```css
$form-spoken-padding-select: 2px;
```

##### $form-spoken-height
- Height for spoken form items.
- Default: 25px;
- Type: Number
```css
$form-spoken-height: 20px;
```

##### $form-textarea-height
- Height for textarea form items.
- Default: 150px;
- Type: Number
```css
$form-textarea-height: 175px;
```

##### $form-icon-size
- Icon size for form items.
- Default: 20px;
- Type: Number
```css
$form-icon-size: 15px;
```

##### $form-icon-top-indent
- How much to indent icons from the top of form items.
- Default: 8px;
- Type: Number
```css
$form-icon-top-indent: 10px;
```

##### $form-icon-side-indent
- How much to indent icons from the left of form items.
- Default: 10px;
- Type: Number
```css
$form-icon-side-indent: 15px;
```

##### $form-icon-padding-side
- Padding for icons in form items.
- Default: 38px;
- Type: Number
```css
$form-icon-padding-side: 25px;
```

##### $customize-webkit-forms
- Do you want to customize the look of Webkit form items?
- Default: true;
- Type: Boolean
```css
$customize-webkit-forms: false;
```

##### $webkit-select-arrow
- A specific file to use as the down arrow on Webkit select boxes. To use $customize-webkit-forms must be true.
- Default: url('../images/select-arrow.svg');
- Type: Number
```css
$webkit-select-arrow: url('images/select-arrow-black.svg');;
```

##### $form-select-arrow-ypos
- Set a ypos for the image used in selects. To use $customize-webkit-forms must be true.
- Default: 13px;
- Type: Number
```css
$form-select-arrow-ypos: 17px;
```

##### $form-select-arrow-spoken-ypos
- Set a ypos for the image used in selects. To use $customize-webkit-forms must be true.
- Default: 8px;
- Type: Number
```css
$form-select-arrow-spoken-ypos: 13px;
```

##### $form-label-error-color
- Label color for a field with errors.
- Default: #F00;
- Type: Color
```css
$form-label-error-color: #000;
```

##### $form-error-message-color
- Error message color for a field with errors.
- Default: #F00;
- Type: Color
```css
$form-error-message-color: #000;
```

##### $form-error-message-size
- Error message text size for a field with errors.
- Default: 12px;
- Type: Number
```css
$form-error-message-size: 10px;
```

##### $form-error-border-color
- Border color of a field with errors.
- Default: #F00;
- Type: Color
```css
$form-error-border-color: #000;
```

##### $form-error-border-size
- Size of the border of a field with errors.
- Default: 1px;
- Type: Number
```css
$form-error-border-size: 3px;
```

##### $form-error-border-type
- Style of the border of a field with errors.
- Default: solid;
- Type: String
```css
$form-error-border-type: dashed;
```

##### $form-disabled-label-color
- Label color of a form that is disabled.
- Default: #808080;
- Type: Color
```css
$form-disabled-label-color: #000;
```

##### $form-disabled-bg-color
- Background color of a form that is disabled.
- Default: #808080;
- Type: Color
```css
$form-disabled-bg-color: #000;
```

##### $form-item-border-radius
- Radius of the border for a form item.
- Default: 0px;
- Type: Number
```css
$form-item-border-radius: 5px;
```

##### $form-disabled-border-color
- Border color of a form that is disabled.
- Default: #808080;
- Type: Color
```css
$form-disabled-border-color: #000;
```

##### $form-focus-border-color
- Focus border color of a form item.
- Default: #00F;
- Type: Color
```css
$form-focus-border-color: #888;
```

##### $form-focus-text-color
- Forus text color of a form item.
- Default: #00F;
- Type: Color
```css
$form-focus-text-color: #888;
```

### Layout

##### Examples
```html
<form>
   <ul class="form-quarters">
       <li>
           <label>Name</label>
           <input type="text">
       </li>
       <li class="form-error">
           <span class="label">Title</span>
           <ul class="check-list">
               <li>
                   <input type="checkbox"> <label>Mr.</label>
               </li>
               <li>
                   <input type="checkbox"> <label>Mrs.</label>
               </li>
               <li>
                   <input type="checkbox"> <label>Miss.</label>
               </li>
           </ul>
           <span class="form-error__message">Error message</span>
       </li>
       <li class="form-item-half">
           <label>Email</label>
           <input type="text">
       </li>
       <li>
           <span class="label">Gender</span>
           <ul class="check-list  check-list--inline">
               <li>
                   <input type="radio"> <label>Male</label>
               </li>
               <li>
                   <input type="radio"> <label>Female</label>
               </li>
           </ul>
       </li>
   </ul>
</form>
```

```css
.form-quarters{
    assemble-form: 1/4 30px;
}
```

##### Form Layout Requirements
The use of Assemble Forms requires that box-sizing: border-box; be set on the form cells. It is common to just apply this to everything with:
```css
*,
*:before,
*:after {
    box-sizing: border-box;
}
```

You can apply it to only the form if you don't want to apply it to everything in your project. You do this by setting the box-sizing option to true when using assemble-form:
See more information under 'Options'.
```css
.form-quarters{
    assemble-form: 1/4 30px _ _ true;
}
```

### Options
#### *assemble-form*
assemble-form will set options for all the cells in a form at once. It should always be used when using Assemble Form. It builds the base for your form.
Options for 'assemble-form' are as follows:<br>
assemble-form: *Cell Width*, *Gutter Width*, *Form Width/Center*, *Cell Alignment*, *Box Sizing*

##### Cell Width (required)
This will set the width of all the cells in your form. Cell Width can be any of the following:
- Fraction (ex. 1/4)
- Number Value (ex. 320px)
- 'fit' (This will fit all cells in a single row.)

##### Gutter Width (optional)
This will set the size of the gutters in your form. Gutter Width can only be:
- Number Value (ex 30px)

##### Form Width/Center (optional)
This will give the form a set width and center it. Form Width/Center can only be:
- Number Value (ex 850px)

##### Cell Alignment (optional)
This will set the alignment of each cell in the form. Cell Alignment can be any of the following:
- top
- bottom
- center

##### Box Sizing (optional)
This will add the needed box-sizing: border-box; to each grid cell. Many people prefer this to be included on everyhting with *. If you do not use this on everything you must set this to true. Box Sizing can be:
- true
- false

##### Not setting some options
If you would like to set an option but leave the option before it blank you can do so like this:
assemble-form: 1/4 _ 800px;
This would set a form cell width of 25%, no gutters (the '_'), and a fixed form width of 800px.

<br><br>
#### *assemble-form-cell*
assemble-single-form will allow you to change the behavior of a single form cell. Let's say you used assemble-form like this:
```css
.form-quarters{
    assemble-form: 1/4 30px;
}
```

This makes all the cells in your form 25% with 30px gutters. Now lets say you want one cell in that form to be 1/2. On that cell add this:
```css
.form-cell-half{
    assemble-form-cell: 1/2;
}
```

This would override the 25% declaration from assemble-form and make just this cell 50%.

Options for 'assemble-form-cell' are as follows:<br>
assemble-form-cell: *Cell Width*, *Cell Alignment*

##### Cell Width (optional)
This will set the width of only this cell. Cell Width can be any of the following:
- Fraction (ex. 1/4)
- Number Value (ex. 320px)

##### Cell Alignment (optional)
This will set the alignment of only this cell. Cell Alignment can be any of the following:
- top
- bottom
- center

##### Both are optional?
Yes, both are optional but you will need at least one of these options when using assemble-form-cell.

<br><br>
#### *assemble-form-mq*
Using assemble-form-mq is for when you need to change the behavior of a form in a media query. Instead of re-writing all the css for the form we only override the parts that need changing.
Assemble Form leaves defining the media queries up to you. A great plugin for this is [PostCSS Custom Media].
After you have defined a media query you can use it like this:

```css
@media all and (max-width: 1000px) and (min-width: 700px) {
    .form-quarters{
        assemble-form-mq: 1/2 20px;
    }
}
```

This would change the grid to have 50% cell widths and 20px gutters within the given media query.

Options for 'assemble-form-mq' are as follows:<br>
assemble-form-mq: *Cell Width*, *Gutter Width*, *Form Width/Center*, *Cell Alignment*

##### Cell Width (optional)
This will set the width of all the cells in your form. Cell Width can be any of the following:
- Fraction (ex. 1/4)
- Number Value (ex. 320px)
- 'fit' (This will fit all cells in a single row.)

##### Gutter Width (optional)
This will set the size of the gutters in your form. Gutter Width can only be:
- Number Value (ex 30px)

##### Grid Width/Center (optional)
This will give the form a set width and center it. Form Width/Center can only be:
- Number Value (ex 850px)

##### Cell Alignment (optional)
This will set the alignment of each cell in the form. Cell Alignment can be an of the following:
- top
- bottom
- center

##### Everything is optional?
Yes, everything is optional but you will need at least one of these options when using assemble-form-mq.

##### What about assemble-form-cell-mq?
What if you want to modifiy a single cell in a media query? When modifing a single cell have to override everything that assemble-form-cell generates so there is no need for a assemble-form-cell-mq. Just use assemble-form-cell within a media query and you are good to go.

<br><br>
#### Extra Info
While not a requirement it is recommended that when you are creating markup for your forms you only apply assemble-form, assemble-form-cell, and assemble-form-mq to a specific html tag. If you need to add style, such as background-color (or anything else), you should do that on a differnt tag within your form markup. This will help keep things organized and allow you to re-use your form classes with out visual style getting in the way. Again, this is just advice. It is not required.

### Modifier Variables

##### $form-spoken
- Turn on/off spoken forms. A class of .form-spoken will be generated if true.
- Default: false;
- Type: Boolean
```css
$form-spoken: true;
```
Usage
```html
<div class="form-spoken">
    Every
    <select>
        <option>day</option>
        <option>week</option>
        <option>month</option>
        <option>year</option>
    </select>
    go to the
    <input type="text">.
</div>
```

##### $form-disabled
- Turn on/off disabled forms. A class of .form-disabled will be generated if true.
- Default: false;
- Type: Boolean
```css
$form-disabled: true;
```
Usage
```html
<form>
    <ul class="form-thirds">
        <li>
            <label>Input Field 1</label>
            <input type="text">
        </li>
        <li class="form-disabled">
            <label>Disabled Field</label>
            <input type="text">
        </li>
    </ul>
</form>
```

##### $input-inline
- Turn on/off inline forms. A class of .form-inline will be generated if true.
- Default: false;
- Type: Boolean
```css
$input-inline: true;
```
Usage
```html
<ul class="form-inline">
    <li>
        <label>Search</label>
        <input type="text">
        <button class="btn">Button</button>
    </li>
</ul>
```

##### $input-addon
- Turn on/off addon forms. A class of .form-addon will be generated if true.
- Default: false;
- Type: Boolean
```css
$input-addon: true;
```
Usage
```html
<ul class="form-thirds">
    <li>
        <label>Input Field 1</label>
        <input type="text">
    </li>
    <li>
        <label>Input Field 2</label>
        <div class="input-addon  input-addon--left">
            <img data-src="../images/lock.svg" class="iconic">
            <input type="text">
        </div>
    </li>
    <li>
        <label>Input Field 3</label>
        <div class="input-addon  input-addon--right">
            <img data-src="../images/lock.svg" class="iconic">
            <input type="text">
        </div>
    </li>
</ul>
```