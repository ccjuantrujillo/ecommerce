import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  template: `
        <!-- Products Section -->
        <div id="products" class="page-section active">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h3>Gestión de Productos</h3>
                <button class="btn btn-primary btn-custom" data-bs-toggle="modal" data-bs-target="#productModal">
                    <i class="bi bi-plus-circle"></i> Nuevo Producto
                </button>
            </div>

            <div class="card">
                <div class="card-body">
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Buscar productos...">
                        </div>
                        <div class="col-md-3">
                            <select class="form-select">
                                <option>Todas las categorías</option>
                                <option>Electrónicos</option>
                                <option>Ropa</option>
                                <option>Hogar</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select class="form-select">
                                <option>Todos los estados</option>
                                <option>Activo</option>
                                <option>Inactivo</option>
                            </select>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead class="table-light">
                                <tr>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Categoría</th>
                                    <th>Precio</th>
                                    <th>Stock</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="https://via.placeholder.com/50" class="product-img" alt="Producto"></td>
                                    <td>iPhone 14 Pro</td>
                                    <td>Electrónicos</td>
                                    <td>$999.00</td>
                                    <td>25</td>
                                    <td><span class="badge bg-success">Activo</span></td>
                                    <td>
                                        <button class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-pencil"></i></button>
                                        <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src="https://via.placeholder.com/50" class="product-img" alt="Producto"></td>
                                    <td>MacBook Air M2</td>
                                    <td>Electrónicos</td>
                                    <td>$1299.00</td>
                                    <td>15</td>
                                    <td><span class="badge bg-success">Activo</span></td>
                                    <td>
                                        <button class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-pencil"></i></button>
                                        <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src="https://via.placeholder.com/50" class="product-img" alt="Producto"></td>
                                    <td>Camiseta Nike</td>
                                    <td>Ropa</td>
                                    <td>$29.99</td>
                                    <td>100</td>
                                    <td><span class="badge bg-warning">Inactivo</span></td>
                                    <td>
                                        <button class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-pencil"></i></button>
                                        <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <nav>
                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled"><a class="page-link" href="#">Anterior</a></li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
  `,
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
