//!
//!
//!
//!

use nalgebra as na;

use na::Vector2;

/// A 2-Dimensional Grid where each cell in the grid represents a vector of two values.
pub type VectorField = Vec<Vec<Vector2<f64>>>;

/// A grid that
pub struct DensityFluidGrid {
    pub width: usize,
    pub height: usize,

    pub diffusion_rate: usize,
    //TODO
    /// The viscosity of the fluid. More viscous Fluids
    pub viscosity: usize,
    /// the length of the time step
    pub dt: usize,

    velocity_field: VectorField,
    prev_velocity_field: VectorField,
    density_field: VectorField,
}

impl DensityFluidGrid {
    /// Adds the specified density
    pub fn add_denisity(&mut self, x_pos: usize, y_pos: usize, amount: f64) {}

    pub fn diffuse() {}

    pub fn advect() {}
}

pub trait DrawDensity {
    fn draw(grid: &DensityFluidGrid);
}

pub fn test_fn() -> String {
    String::from("Hello World! This is test_fn from Rust!")
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
