<?php
/*
Plugin Name:  MymenTech Vimeo Player and Carousel
Plugin URI:   https://www.mymentech.com
Description:  Basic WordPress Plugin.
Version:      1.0
Author:       MymenTech
Author URI:   https://www.mymentech.com
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  mt-vimeo-carousel
*/

class Mtvimeocarousel {
	public function __construct() {
		add_action('plugins_loaded', array($this, 'plugin_bootstrap'));
		add_action('wp_enqueue_scripts', array($this, 'plugins_scripts'));
	}

	public function plugin_bootstrap() {
		load_plugin_textdomain( 'mt-vimeo-carousel', false, plugin_dir_path( __FILE__ ) . "/languages" );
	}

	function plugins_scripts(){
		wp_enqueue_style('slick-slider-css', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
		wp_enqueue_style('mt-vimeo-carousel-css', plugin_dir_url(__FILE__).'/assets/css/plugin-style.css',null,'1.0');
		wp_enqueue_script('slick-slider-js', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js','jquery');
		wp_enqueue_script('vimeo-player', '//player.vimeo.com/api/player.js','jquery','2.6.5');
	}
}

new Mtvimeocarousel();